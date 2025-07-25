const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs'); 

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: {
    type: String,
    default: 'default.png'
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(_entered) {
        return _entered === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

////////////MIDDELEWARE FUNCTIONS FOR USER MATTERS//////////

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();
  
  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///IF PASSWORD IS NEW OR NOT MODIFIED, SINCE WERE MODIFYNG IT, WILL SKIP
userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
userSchema.pre(/^find/, function(next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});


////////////////////////////////////////////////////////////
////RTO COMPARE PASSWORDS, DECRYPTED, ENTERED VS ON DATABASE
userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};


////////////////////////////////////////////////////////////
////VERIFIES IF THE PASSWORD WAS AHCNGED IN THE MEAN TIME OF THE LAST API CALL
userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//instance method that removes password from the response (such as in signup)
userSchema.methods.toJSON = function() { //recall this points to the current document
  const sentUserData = this.toObject();
    // console.log(sentUserData) //password was there
  delete sentUserData.password;
    // console.log(sentUserData) //password was removed
  return sentUserData;
};

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const User = mongoose.model('User', userSchema);

module.exports = User;
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
