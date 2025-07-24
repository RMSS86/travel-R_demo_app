import 'package:flutter/material.dart';
import 'package:trax/components/Layout/PageContent.dart';
import 'package:trax/components/UI/elements/buttons/GeneralButton.dart';
import 'package:trax/components/UI/elements/forms/LogInForm.dart';
import '../../../Animations/AnimatedTransition.dart';
import '../../../CAT/Media/MediaCAT.dart';
import '../../UI/elements/buttons/ElevatedButton.dart';
import '../../UI/elements/dialogs/GeneralDialog.dart';
import '../../UI/elements/filters/BlurFilter.dart';
import '../../UI/elements/floats/labels/Labeler.dart';
import '../../UI/elements/forms/SignInForm.dart';
import '../../UI/elements/media/logo/LogoBoxHero.dart';
import '../../UI/elements/spacers/Spacer.dart';
import 'dart:ui';

final double xGap_ = 25.0;
final double yGap_ = 25.0;

class SplashPage extends StatefulWidget
{
    const SplashPage({super.key});

    @override
    State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage>
{
    bool isShowSignInDialog = false; //< blur BG

    @override
    Widget build(BuildContext context)
    {
        //< PAGE CONTENTS
        return PageContent(
            active_: isShowSignInDialog,
            extendBody_: true,
            bgColor_: Colors.grey.shade300,
            bgImageSrc_: MediaCAT.BrandImage3,
            padding_: 60.0,
            children_: [

                //< LogoBox
                const LogoBoxHero(
                    padding_: 3.0,
                    heroTag_: 'logo_swap',
                    logoSrc_: MediaCAT.LogoLetters_only_white,
                    width_: 360
                ),

                //< BRAND SLOGAN
                const Labeler(
                    symetricalPadding_: false,
                    verticalPadding_: 1.0,
                    horizontalPadding_: 18.0,
                    tag_: "[ Instant Memories ]",
                    tagTextColor_: Colors.white,
                    tagFontSize_: 15,
                    tagTextweight_: FontWeight.w300
                ),

                //< SPACER
                WHSpacer(height_: xGap_),

                //< LOGIN BUTTON
                MaterialElevatedButton(tag_: 'Log In',
                    paddingbottom_: 1.0,
                    onTap_: () =>
                    {
                        setState(() {isShowSignInDialog = true;}),
                        Future.delayed(const Duration(milliseconds: 21),
                            () {
                                if (!context.mounted) return;
                                //////////////////////////////////< FormShow
                                ////////////////////////////////////////////
                                showCustomDialog(
                                    context,
                                    tag_: 'Log In',
                                    exitButtonPos_: -232,
                                    form_: LogInForm(),
                                    onValue: (_) {},
                                    children_: [SizedBox(height: 0.0)]);
                                //////////////////////////////////< FormShow
                                ////////////////////////////////////////////
                                print('Pressed LogIn!');
                            }
                        ),
                        ///DELAYED BLUR OFF
                        Future.delayed(const Duration(milliseconds: 300),
                            () {
                                setState(() { isShowSignInDialog = false; });
                            }
                        )
                    }
                ),

                //< SPACER
                WHSpacer(height_: 10.0),

                //< REGISTER BUTTON
                GeneralButton( //make the delayed option internal with conditionals
                    tag_: 'Register',
                    symetricalPadding_: false,
                    horizontalPadding_: 1.0,
                    verticalPadding_: 1.0,
                    elevation_: 0,
                    width_: 240,
                    radius_: 25.0,
                    textAlign_: TextAlign.end,
                    bgColor_: Colors.transparent,//Color(0xf71e1e1e)
                    onTap_: ()
                    {
                        setState(() {isShowSignInDialog = true;});
                        if (!context.mounted) return;

                        //////////////////////////////////< FormShow
                        ////////////////////////////////////////////
                        showCustomDialog(
                            context,
                            tag_: 'Sign In',
                            exitButtonPos_: -126,
                            form_: SignInForm(),
                            onValue: (_) {},
                            children_: [
                                SizedBox(height: 0.0)
                            ]
                        );
                        setState(() {isShowSignInDialog = false;});
                        //////////////////////////////////< FormShow
                        ////////////////////////////////////////////

                        print('Pressed SignIn!');
                    }
                ),

                BlurFilter(child_: SizedBox(height: 0.0), active_: isShowSignInDialog)
            ]
        );
    }
}

//< using the _animatedRoute
// Navigator.push(
// context,
// _animatedRoute(
// const LandingPage()
// )
// );

//ndkVersion = "25.1.8937393"
