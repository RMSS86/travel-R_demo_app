import 'package:flutter/material.dart';

import '../material/MaterialWrapper.dart';

class InputFormFielder extends StatelessWidget
{
    final String tag_;
    final String hint_;
    final String iconSrc_;
    final bool obscureText_;
    final TextInputType inputType_;
    final double borderRadius_;
    final TextEditingController? textController_;

    const InputFormFielder({

        super.key,
        this.tag_ = 'email',
        this.obscureText_ = false,
        required this.iconSrc_,
        this.borderRadius_ = 12.0,
        this.textController_,
        this.hint_='Enter Criteria',
        this.inputType_ = TextInputType.text
    });

    @override
    Widget build(BuildContext context)
    {
        return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
                Text(
                    tag_,
                    style: TextStyle(
                        color: Colors.black54
                    )
                ),
                Padding(
                    padding: const EdgeInsets.only(top: 8, bottom: 4),
                    child: TextFormField(
                        controller: textController_,
                        validator: (value)
                        {
                            if (value!.isEmpty)
                            {
                                return "";
                            }
                            return null;
                        },
                        obscureText: obscureText_,
                        keyboardType: inputType_,
                        textInputAction: TextInputAction.next,
                        decoration: InputDecoration(
                        hintText: hint_,
                            hintStyle: TextStyle(
                                fontStyle: FontStyle.italic,
                                color: Colors.black38,
                            ),
                            enabledBorder: OutlineInputBorder(
                                borderSide:
                                BorderSide(width: 1, color: Colors.transparent), //<-- SEE HERE
                                borderRadius: BorderRadius.circular(borderRadius_)
                            ),
                            filled: true,
                            fillColor: Colors.black12.withOpacity(0.05),
                            border: OutlineInputBorder(borderSide: BorderSide.none),
                            prefixIcon: Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 8),
                                child: MaterialWrapper(
                                    elevation_: 12,
                                    radius_: 50,
                                    wrapped_: Image.asset(iconSrc_, width: 15))
                            )
                        )
                    )
                )
            ]
        );
    }
}
