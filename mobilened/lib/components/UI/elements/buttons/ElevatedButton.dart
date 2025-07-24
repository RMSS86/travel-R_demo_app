import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:trax/components/UI/elements/material/MaterialWrapper.dart';

class MaterialElevatedButton extends StatelessWidget
{
    final double paddingtop_;
    final double paddingbottom_;
    final double Hpad_;
    final Color btnColor_;
    final double btnWidth_;
    final double btnHeight_;
    final double elevation_;
    final IconData btnIcon_;
    final Color innerColor_;
    final String tag_;
    final double tagFontSize_;
    final void Function()? onTap_;

    const MaterialElevatedButton({
        super.key,
        this.paddingtop_ = 8.0,
        this.paddingbottom_ = 24,
        this.btnColor_ = Colors.transparent,
        this.btnHeight_ = 56,
        this.btnWidth_ = double.infinity,
        this.Hpad_=0,
        this.onTap_,
        this.elevation_ = 9.0,
        this.tag_ = 'press me',
        this.tagFontSize_ = 15.0,
        this.innerColor_ = const Color(0xFFEFEAEB),
        this.btnIcon_ = CupertinoIcons.arrow_right

    });

    @override
    Widget build(BuildContext context) 
    {
        return Padding(
            padding: EdgeInsets.only(top: paddingtop_, bottom: paddingbottom_, right: Hpad_ , left:Hpad_ ),
            child: MaterialWrapper(

                elevation_: elevation_,
                bgColor_: btnColor_,
                wrapped_: ElevatedButton.icon(
                    onPressed: onTap_,

                    style: ElevatedButton.styleFrom(
                        foregroundColor: btnColor_,
                        backgroundColor: btnColor_,
                        minimumSize: Size(double.infinity, btnHeight_),

                        shape: const RoundedRectangleBorder(
                            borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(12),
                                topRight: Radius.circular(12),
                                bottomRight: Radius.circular(12),
                                bottomLeft: Radius.circular(25)
                            )
                        )
                    ),

                    icon: Icon(
                        btnIcon_,
                        color: innerColor_
                    ),

                    label: Text(tag_,
                        style: TextStyle(
                            color: innerColor_,
                            fontSize: tagFontSize_
                        )
                    )
                )
            )
        );

    }
}
//const Color(0x25434040) Pink


