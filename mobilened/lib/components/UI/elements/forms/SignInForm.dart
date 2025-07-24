import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'package:trax/CAT/Media/MediaCAT.dart';
import 'package:trax/models/types/UserTypes.dart';

import '../media/logo/LogoBoxHero.dart';
import 'InputFormFielder.dart';

//< MAKE THIS WIDGET GENERIC
class SignInForm extends StatefulWidget
{
    const SignInForm({
        super.key
    });

    @override
    State<SignInForm> createState() => _SignInFormState();
}

class _SignInFormState extends State<SignInForm>
{
     late NewUser newUser_;
    final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
    final _nameController = TextEditingController();
    final _emailController = TextEditingController();
    final _pwdController = TextEditingController();
    final _pwdConfirmController = TextEditingController();

    @override
    Widget build(BuildContext context) 
    {
        return Stack(
            children: [

                Form(
                    key: _formKey,
                    child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [

                            InputFormFielder(
                                textController_:_nameController ,
                                iconSrc_: MediaCAT.userIcon,
                                tag_: 'Name',
                                hint_: 'name & last name',
                                obscureText_: false
                            ),

                            InputFormFielder(
                                textController_:_emailController ,
                                iconSrc_: MediaCAT.mailIcon,
                                tag_: 'Email',
                                hint_: 'user@trax.io',
                                inputType_: TextInputType.emailAddress

                            ),
                            InputFormFielder(
                                textController_: _pwdController,
                                iconSrc_: MediaCAT.lockIcon,
                                tag_: 'Password',
                                hint_: '+8-digits Password',
                                obscureText_: true

                            ),
                            InputFormFielder(
                                textController_: _pwdConfirmController,
                                iconSrc_: MediaCAT.lockIcon,
                                tag_: 'Confirm Password',
                                hint_: 'Password Confirm',
                                obscureText_: true
                            ),

                            //< SIGNIN BUTTON
                            Padding(
                                padding: const EdgeInsets.only(top: 12, bottom: 12),
                                child: ElevatedButton.icon(
                                    onPressed: ()
                                    {
                                      setState(() {
                                        // newUser_;
                                        // //
                                        // newUser_.name_= _nameController.value.text;
                                        // newUser_.email_= _emailController.value.text;
                                        // newUser_.password_= _pwdController.value.text;
                                        // newUser_.passwordConfirm_= _pwdConfirmController.value.text;
                                        // print('Condensed values $newUser_');

                                      });
                                      //> SIGN-UP METHOD
                                        print('GETTING SIGNED-IN! \n'
                                            '${_nameController.value.text} \n'
                                            '${_emailController.value.text} \n'
                                            '${_pwdController.value.text} \n'
                                            '${_pwdConfirmController.value.text}');

                                    },
                                    style: ElevatedButton.styleFrom(
                                        backgroundColor: const Color(0xFFF77D8E),
                                        minimumSize: const Size(double.infinity, 56),
                                        shape: const RoundedRectangleBorder(
                                            borderRadius: BorderRadius.only(
                                                topLeft: Radius.circular(12),
                                                topRight: Radius.circular(12),
                                                bottomRight: Radius.circular(12),
                                                bottomLeft: Radius.circular(25)
                                            )
                                        )
                                    ),
                                    icon: const Icon(
                                        CupertinoIcons.arrow_right,
                                        color: Color(0xFFEFEAEB)
                                    ),
                                    label: const Text("Sign In",
                                        style: TextStyle(
                                            color: Color(0xFFEFEAEB),
                                            fontSize: 15
                                        )
                                    )
                                )
                            )

                            //<LOGO

                        ]

                    )
                )

            ]

        );
    }
}

