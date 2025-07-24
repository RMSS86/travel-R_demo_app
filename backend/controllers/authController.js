const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');
///////////////////////////////////////////////////
///////////////////////////////////////////////////

///////////////////////////////////////////////////////////
const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
///////////////////////////////////////////////////////////

//////////////////////////////////////////////////TOKEN-CREATION
////////////////////////////////////////////////////////////////
const createSendToken = (user, statusCode, res) => {

  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    // domain: undefined, //UNRESTRITS THE COOKIES SENT TO CLIENT
    // eslint-disable-next-line no-undef
    //secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);
  user.password = undefined; // REMOVE PASSWORD FROM OUTPUT

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

/////////////////////////////////////////////////////SIGNUP
///////////////////////////////////////////////////////////
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  //const url = `${req.protocol}://${req.get('host')}/me`;
  const url = `${req.protocol}://${req.get('host')}:3000/profile`;

  // eslint-disable-next-line new-cap
  await new sendEmail(newUser, url).sendWelcome();
  createSendToken(newUser, 201, res);
});

//////////////////////////////////////////////////////LOGIN
///////////////////////////////////////////////////////////
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  
  //check if emial plus passwort
  if (!email || !password) {
    return next(
      new AppError('Please provide Correct [ email ]  and [ Password ]', 404),
    );
  }

  //in case of field snot selected to be send back in the response use select.('+FIELD');
  const user = await User.findOne({ email }).select('+password');

  ////comparing the crypted passwods
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      new AppError(
        'Incorrect  [ email ]  or [ Password ], please verify your credentials and try again',
        401,
      ),
    );
  }
  // 3) If everything ok, send token to client
  createSendToken(user, 200, res);
});

/////////////////////////////////////////////////////LOGOUT
///////////////////////////////////////////////////////////
exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
    domain: undefined, //UNRESTRICTS THE COOKIES SENT TO CLIENT
  });
  res.status(200).json({ status: 'success' });
};

/////////////////////////////////////////////////////PROTECTS
/////////////////////////////////////////////////////////////
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  //////////GET THE TOKEN! EXISTS OR NOT
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError(
        'You are currently not logged in! Please log in to get Access!',
        401,
      ),
    );
  }

  //////////VALIDATE TOKEN!
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // console.log(decoded);

  //////////USER STILL EXISTS?
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError('Sorry! This User no Longer Exist!', 401));
  }

  //////////USER CHANGED PASSWORD AFTER THE JWT WAS ISSUED!
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        'Opps Password reciently changed! please log in again using the New Password.',
        401,
      ),
    );
  }

  ////ACCESS GTRANTED FORM PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

/////////////////////////////////////////////////////IS-LOGED-IN
////////////////////////////////////////////////////////////////
// Only for rendered pages, no errors!
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET,
      );
      console.log('from the isLoggedIn MiddleWare: ', req.cookies.jwt);
      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

/////////////////////////////////////////////////////RESTRICT-TO
////////////////////////////////////////////////////////////////
exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    console.log('Roles form restrict: ', req.user.role);
    // roles ['admin', 'lead-guide']. role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          'Sorry you dont have enough credentials to complete request.',
          403,
        ),
      ); //403 FORBIDEN STATUS CODE
    }
    next();
  };

////////////////////////////////////////////////////FORGOT-PASSWORD
///////////////////////////////////////////////////////////////////
exports.forgotPassword = catchAsync(async (req, res, next) => {
  ///GET THE USER FROM POSTED EMAIL
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }
  ///GENERATE THE RANDOM RESET TOKEN AND SAVE
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  ///SEND IT TO USER'S EMAIL
  const resetURL = `${req.protocol}://${req.get(
    'host',
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    console.log(err);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500,
    );
  }
});

///////////////////////////////////////////////////RESET-PASWORD
////////////////////////////////////////////////////////////////
exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update changedPasswordAt property for the user
  // 4) Log the user in, send JWT
  createSendToken(user, 200, res);
});

/////////////////////////////////////////////////////UPDATE PASSWORD
////////////////////////////////////////////////////////////////////
exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select('+password');

  // 2) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  // 4) Log user in, send JWT
  createSendToken(user, 200, res);
});
