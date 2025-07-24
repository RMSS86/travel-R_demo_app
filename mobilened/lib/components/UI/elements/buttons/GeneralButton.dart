import 'package:flutter/material.dart';

import '../material/MaterialWrapper.dart';
//import 'package:provider/provider.dart';
// import '../Theme/ThemeProvider.dart';

class GeneralButton extends StatelessWidget
{
    final double elevation_;
    final double radius_;
    final double padding_;
    final double verticalPadding_;
    final double horizontalPadding_;
    final bool symetricalPadding_;
    final bool symetricalBorderRadius_;
    final double topLeft_;
    final double topRight_;
    final double bottomRight_;
    final double bottomLeft_;
    final int animationTime_;
    final Widget? wrapped_; // List<Widget>
    final Color bgColor_;
    final Color shadowColor_;
    final String tag_;
    final Color tagTextColor_;
    final FontWeight tagTextweight_;
    final double tagFontSize_;
    final double? width_;
    final double? height_;
    final TextAlign? textAlign_;
    final void Function()? onTap_;

    /// Class for creating a combined customizable [ Widget ]
    /// Composed by a [ Text ] and a [ MaterialWrapper ],
    /// All values on default tag add with an add icon
    /// the [ VoidCallback ] function passed down through [ onTap_ ],
    /// must be void, remember if using a provider to [ NotifyProvider ] it.
    const GeneralButton({
        super.key,
        this.elevation_ = 9.0,
        this.radius_ = 12.0,
        this.padding_ = 25.0,
        this.verticalPadding_ = 25.0,
        this.horizontalPadding_ = 25.0,
        this.symetricalPadding_ = true,
        this.animationTime_ = 1500,
        this.bgColor_ = Colors.transparent,
        this.shadowColor_ = Colors.black54,
        this.onTap_,
        this.tag_ = 'Press Me!',
        this.tagTextColor_ = Colors.white,
        this.tagTextweight_ = FontWeight.bold,
        this.tagFontSize_ = 15.0,
        this.width_,
        this.height_,
        this.wrapped_,
        this.symetricalBorderRadius_= true,
        this.topLeft_= 12.0,
        this.topRight_= 12.0,
        this.bottomRight_= 12.0,
        this.bottomLeft_= 25.0,
        this.textAlign_=TextAlign.center,

    });

    @override
    Widget build(BuildContext context)
    {
        return GestureDetector(
            onTap: onTap_,
            child: MaterialWrapper(
                bgColor_: bgColor_,
                shadowColor_: shadowColor_,
                ////CHANGE TO DIF TYPES OF THEME NOT JUST DARK OR LIGHT
                animationDuration_: animationTime_,
                elevation_: elevation_,
                radius_: radius_,
                wrapped_: Container(
                    width: width_,
                    height: height_,
                    decoration: BoxDecoration(
                        borderRadius: symetricalBorderRadius_ ? BorderRadius.circular(radius_) :
                        BorderRadius.only(
                                topLeft: Radius.circular(topLeft_),
                                topRight: Radius.circular(topRight_),
                                bottomRight: Radius.circular(bottomRight_),
                                bottomLeft: Radius.circular(bottomLeft_),
                        ),
                    ),
                    padding: symetricalPadding_ ? EdgeInsets.all(padding_) : EdgeInsets.symmetric(vertical: verticalPadding_, horizontal: horizontalPadding_),
                    child: Text(textAlign: textAlign_,
                        tag_,
                        style: TextStyle(
                            color: tagTextColor_,
                            fontWeight: tagTextweight_,
                            fontSize: tagFontSize_
                        )
                    )
                )
            )

        );
    }
}
