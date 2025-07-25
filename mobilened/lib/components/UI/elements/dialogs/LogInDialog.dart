import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../forms/LogInForm.dart';
import '../forms/SignInForm.dart';

void showCustomDialog(BuildContext context, {required ValueChanged onValue}) {
  showGeneralDialog(
    context: context,
    barrierLabel: "Barrier",
    barrierDismissible: true,
    barrierColor: Colors.black.withOpacity(0.5),
    transitionDuration: const Duration(milliseconds: 400),
    pageBuilder: (_, __, ___) {
      return Center(
        child: Container(
          height: 630,
          margin: const EdgeInsets.symmetric(horizontal: 16),
          padding: const EdgeInsets.symmetric(vertical: 32, horizontal: 24),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.9),
            borderRadius: BorderRadius.circular(40),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.3),
                offset: const Offset(0, 30),
                blurRadius: 60,
              ),
              const BoxShadow(
                color: Colors.black45,
                offset: Offset(0, 30),
                blurRadius: 60,
              ),
            ],
          ),
          child: Scaffold(
            backgroundColor: Colors.transparent,
            body: Stack(
              clipBehavior: Clip.none,
              children: [
                SingleChildScrollView(
                  child: Column(
                    children: [
                      const Text(
                        "Sign in",
                        style: TextStyle(
                          fontSize: 34,
                          fontFamily: "Poppins",
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      const Padding(
                        padding: EdgeInsets.symmetric(vertical: 16),
                        child: Text(
                          "Welcome to discover hundreds of Places and hotels to start a New exciting Avendure.",
                          textAlign: TextAlign.center,
                        ),
                      ),
                      const SignInForm(), //< MAKE THIS AN INPUT

                      //< MAKE THIS A COMPONENT
                      const Row(
                        children: [
                          Expanded(
                            child: Divider(),
                          ),
                          Padding(
                            padding: EdgeInsets.symmetric(horizontal: 16),
                            child: Text(
                              "OR",
                              style: TextStyle(
                                color: Colors.black26,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                          Expanded(child: Divider()),
                        ],
                      ),
                      const Padding(
                        padding: EdgeInsets.symmetric(vertical: 24),
                        child: Text(
                          "Sign up with Email, Apple or Google",
                          style: TextStyle(color: Colors.black54),
                        ),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                          //< MAKE A COMPONENT
                          // IconButton(
                          //   onPressed: () {},
                          //   padding: EdgeInsets.zero,
                          //   icon: SvgPicture.asset(
                          //     "assets/icons/email_box.svg",
                          //     height: 64,
                          //     width: 64,
                          //   ),
                          // ),
                          // IconButton(
                          //   onPressed: () {},
                          //   padding: EdgeInsets.zero,
                          //   icon: SvgPicture.asset(
                          //     "assets/icons/apple_box.svg",
                          //     height: 64,
                          //     width: 64,
                          //   ),
                          // ),
                          // IconButton(
                          //   onPressed: () {},
                          //   padding: EdgeInsets.zero,
                          //   icon: SvgPicture.asset(
                          //     "assets/icons/google_box.svg",
                          //     height: 64,
                          //     width: 64,
                          //   ),
                          // ),
                        ],
                      ),
                    ],
                  ),
                ),

                //< MAKE COMPONENT
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: -126,
                  child: CircleAvatar(
                    radius: 16,
                    backgroundColor: Colors.black54,
                    child: Icon(
                      Icons.close,
                      size: 24,
                      color: Colors.white,
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      );
    },

    transitionBuilder: (_, anim, __, child) {
      Tween<Offset> tween;
      // if (anim.status == AnimationStatus.reverse) {
      //   tween = Tween(begin: const Offset(0, 1), end: Offset.zero);
      // } else {
      //   tween = Tween(begin: const Offset(0, -1), end: Offset.zero);
      // }

      tween = Tween(begin: const Offset(0, -1), end: Offset.zero);

      return SlideTransition(
        position: tween.animate(
          CurvedAnimation(parent: anim, curve: Curves.easeInOut),
        ),
        // child: FadeTransition(
        //   opacity: anim,
        //   child: child,
        // ),
        child: child,
      );
    },
  ).then(onValue);
}