import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:trax/CAT/Media/MediaCAT.dart';
import 'package:trax/components/UI/elements/material/MaterialWrapper.dart';
import '../../../../models/types/UserTypes.dart';
import '../../../../providers/USERProvider.dart';
import '../../../../query/http.dart';
import '../../../../routes/Router.dart';
import '../../../pages/landing/LandingPage.dart';
import '../buttons/GeneralButton.dart';
import '../dividers/DividerTagged.dart';
import 'InputFormFielder.dart';

//< MAKE THIS WIDGET GENERIC
class LogInForm extends StatefulWidget {

  const LogInForm({
    super.key,
  });

  @override
  State<LogInForm> createState() => _LogInFormState();
}

class _LogInFormState extends State<LogInForm> {

  final GlobalKey<FormState> formKey_ = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _pwdController = TextEditingController();

  void inputValueTake(){
    // print(_emailController.value.text);
    // print(_pwdController.value.text);

    var credentials_ = LogIn(
      email_: _emailController.value.text,
      password_:_pwdController.value.text ,
    );

//

    var loggedUser =  logIn(targetURL_: 'https://www.natours.dev/api/v1/users/login',  credentials_: credentials_);

    print(credentials_.email_);
    print(credentials_.password_);
    print('FROM LOGIN FORM: $loggedUser');

    Navigator.push(
        context,
        _animatedRoute(
            const LandingPage()
        )
    );
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [

        Form(
          key: formKey_,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [

              InputFormFielder(
                textController_: _emailController,
                iconSrc_: MediaCAT.mailIcon,
                hint_: 'user@trax.io',
                tag_: 'Email',
                inputType_: TextInputType.emailAddress,
              ),

              InputFormFielder(
                textController_: _pwdController,
                iconSrc_: MediaCAT.lockIcon,
                hint_: 'Enter Password',
                tag_: 'Password',
                obscureText_: true,
              ),

              GeneralButton(
                tag_: 'Forgot Password?',
                elevation_: 0,
                radius_: 12.0,
                symetricalPadding_: false,
                horizontalPadding_: 24.0,
                verticalPadding_: 4.0,),

              const SizedBox(height: 9,),

              //< LOGIN BUTTON
              MaterialElevatedButton(onTap_: inputValueTake),
              DividerTagged(tag_: "MORE",),
            ],
          ),
        ),

      ],
    );
  }

  Padding MaterialElevatedButton( { void Function()? onTap_}) {
    return Padding(
              padding: const EdgeInsets.only(top: 8, bottom: 24),
              child: ElevatedButton.icon(
                onPressed: onTap_,
                // onPressed: () {
                //   onTap_;
                //   //LogIn(context);
                //   print(_emailController.value.text);
                //   print(_pwdController.value.text);
                // },
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFF77D8E),
                  minimumSize: const Size(double.infinity, 56),
                  shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(12),
                      topRight: Radius.circular(12),
                      bottomRight: Radius.circular(12),
                      bottomLeft: Radius.circular(25),
                    ),
                  ),
                ),
                icon: const Icon(
                  CupertinoIcons.arrow_right,
                  color: Color(0xFFEFEAEB),
                ),
                label: const Text("Log In",
                  style: TextStyle(
                    color: Color(0xFFEFEAEB),
                    fontSize: 15,
                  ),
                ),
              ),
            );
  }

  static Route _animatedRoute(Widget child)
  {
    return PageRouteBuilder(
        pageBuilder: (context, animation, secundaryAnimation) => child,
        transitionsBuilder: (context, animation, secundaryAnimation, child)
        {
          const begin = Offset(1.0, 0.1);
          const end = Offset.zero;
          const curve = Curves.decelerate;

          var tween =
          Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
          return SlideTransition(
              position: animation.drive(tween),
              child: child
          );
        }
    );
  }
}

class CustomPositioned extends StatelessWidget {
  const CustomPositioned({super.key, this.scale = 1, required this.child});

  final double scale;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Positioned.fill(
      child: Column(
        children: [
          const Spacer(),
          SizedBox(
            height: 100,
            width: 100,
            child: Transform.scale(
              scale: scale,
              child: child,
            ),
          ),
          const Spacer(flex: 2),
        ],
      ),
    );
  }
}