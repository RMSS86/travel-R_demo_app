import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:trax/components/UI/elements/material/MaterialWrapper.dart';

class ButtonTiler extends StatelessWidget
{
    final String tag_;
    final Color bgColor_;
    final void Function()? onTap_;
    final Color tagTextColor_;
    final FontWeight tagTextweight_;
    final double elevation_;
    final double tagFontSize_;
    final double padding_;
    final double verticalPadding_;
    final double horizontalPadding_;
    final bool symetricalPadding_;
    final bool withBorder_;

    const ButtonTiler({
        super.key,
        this.tag_ = 'tile',
        this.onTap_,
        this.padding_ = 25.0,
        this.verticalPadding_ = 25.0,
        this.horizontalPadding_ = 25.0,
        this.symetricalPadding_ = true,
        this.tagTextColor_ = Colors.white,
        this.tagTextweight_ = FontWeight.w300,
        this.bgColor_ = Colors.transparent,
        this.elevation_ = 0,
        this.withBorder_=false,
        this.tagFontSize_ = 15.0});


    @override
    Widget build(BuildContext context)
    {
        return GestureDetector(
            onTap: onTap_,

            child: MaterialWrapper(
                bgColor_: bgColor_,
                elevation_: elevation_,

                wrapped_: Container(
                    padding: symetricalPadding_ ?
                        EdgeInsets.all(padding_) :
                        EdgeInsets.symmetric(vertical: verticalPadding_, horizontal: horizontalPadding_),
                    decoration: withBorder_ ? BoxDecoration(
                        border: Border.all(color: Colors.white,width: 0.3),
                        borderRadius: BorderRadius.circular(8.0)
                    ) : BoxDecoration(
                        borderRadius: BorderRadius.circular(8.0)
                    ),

                    child: Padding(
                      padding:  EdgeInsets.symmetric(horizontal: 0 ,vertical:withBorder_ ? 3.0 : 0 ),
                      child: Text(
                          tag_,
                          style: GoogleFonts.quicksand(
                              color: tagTextColor_,
                              fontSize: tagFontSize_,
                              fontWeight: tagTextweight_
                          )
                      ),
                    )
                )
            ),
        );
    }
}
