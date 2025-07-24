import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../../CAT/Media/MediaCAT.dart';
import '../buttons/floatings/FloatingLabeledButton.dart';
import '../forms/LogInForm.dart';
import '../media/logo/LogoBoxHero.dart';

void showCustomDialog(BuildContext context, {
        required ValueChanged onValue,
        int transitionDuration_ = 400,
        double height_ = 630,
        double exitButtonPos_ = -126,
        String tag_ = 'Hello',
        String descTag_ = "Welcome to discover hundreds of Places and hotels to start a New exciting Avendure.",
        required Widget form_,
        required List<Widget> children_
    })
{
    showGeneralDialog(
        context: context,
        barrierLabel: "Barrier",
        barrierDismissible: true,
        barrierColor: Colors.black.withOpacity(0.5),
        transitionDuration: Duration(milliseconds: transitionDuration_),
        pageBuilder: (_, __, ___)
        {
            return Center(
                child: Container(
                    height: height_,
                    margin: const EdgeInsets.symmetric(horizontal: 16),
                    padding: const EdgeInsets.symmetric(vertical: 32, horizontal: 24),
                    decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.9),
                        borderRadius: BorderRadius.circular(40),
                        boxShadow: [
                            BoxShadow(
                                color: Colors.black.withOpacity(0.3),
                                offset: const Offset(0, 30),
                                blurRadius: 60
                            ),
                            const BoxShadow(
                                color: Colors.black45,
                                offset: Offset(0, 30),
                                blurRadius: 60
                            )
                        ]
                    ),
                    child: Scaffold(
                        backgroundColor: Colors.transparent,
                        body: Stack(
                            clipBehavior: Clip.none,
                            children: [
                                SingleChildScrollView(
                                    child: Column(
                                        children: [
                                            Text(
                                                tag_,
                                                style: TextStyle(
                                                    fontSize: 34,
                                                    fontFamily: "Poppins",
                                                    fontWeight: FontWeight.w600
                                                )
                                            ),
                                            Padding(
                                                padding: EdgeInsets.symmetric(vertical: 16),
                                                child: Text(
                                                    descTag_,
                                                    textAlign: TextAlign.center
                                                )
                                            ),

                                            form_, //< THIS AN INPUT

                                            Row(
                                                children: children_ 
                                            )
                                            //< MAKE THIS A COMPONENT

                                        ]
                                    )
                                ),

                              FloatingLabeledButton(buttonPos_: exitButtonPos_,),


                            ]
                        )
                    )
                )
            );
        },

        transitionBuilder: (_, anim, __, child)
        {
            Tween<Offset> tween;
            // if (anim.status == AnimationStatus.reverse) {
            //   tween = Tween(begin: const Offset(0, 1), end: Offset.zero);
            // } else {
            //   tween = Tween(begin: const Offset(0, -1), end: Offset.zero);
            // }

            tween = Tween(begin: const Offset(0, -1), end: Offset.zero);

            return SlideTransition(
                position: tween.animate(
                    CurvedAnimation(parent: anim, curve: Curves.easeInOut)
                ),
                // child: FadeTransition(
                //   opacity: anim,
                //   child: child,
                // ),
                child: child
            );
        }
    ).then(onValue);
}
