import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../material/MaterialWrapper.dart';
//GoogleFonts.bebasNeue

class Labeler extends StatelessWidget
{

    final double padding_;
    final double verticalPadding_;
    final double horizontalPadding_;
    final bool symetricalPadding_;
    final bool toUpperCase_;
    final String tag_;
    final Color tagTextColor_;
    final FontWeight tagTextweight_;
    final double tagFontSize_;
    final Color bgColor_;
    final double elevation_;
    final bool labelDirCenter_;
    final bool labelDirLeft_;
    final void Function()? onTap_;

    const Labeler({
        super.key,
        this.padding_ = 25.0,
        this.verticalPadding_ = 25.0,
        this.horizontalPadding_ = 25.0,
        this.symetricalPadding_ = true,
        this.tag_ = 'Tag Me!',
        this.tagTextColor_ = Colors.white,
        this.tagTextweight_ = FontWeight.w300,
        this.tagFontSize_ = 15.0,
        this.bgColor_ = Colors.transparent,
        this.elevation_=9,
        this.toUpperCase_= false,
        this.labelDirCenter_ = true,
        this.labelDirLeft_ = false,
        this.onTap_,

    });

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
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0)
          
                  ),
                  child: InkWell(
                    child: Text.rich(
                        softWrap: true,
                        maxLines: 2,
                        style: GoogleFonts.quicksand(
                            color: tagTextColor_,
                            fontSize: tagFontSize_,
                            fontWeight: tagTextweight_
                        ),
                        //< IF TRUE CONDITIONAL
                        textAlign: labelDirCenter_ ?
                        TextAlign.center :

                        //< IF FALSE CONDITIONAL
                        labelDirLeft_ ?
                        TextAlign.start :
                        TextAlign.end,

                        TextSpan(
                            text: toUpperCase_ ?
                            tag_.toUpperCase() : tag_,

                        ),

                    ),
                  ),
              ),
          ),
        );
    }
}

