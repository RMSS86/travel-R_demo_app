import 'package:flutter/material.dart';
import '../floats/labels/SizedLabeler.dart';

class TitleLabeler extends StatelessWidget
{
    final double height_;
    final double width_;
    final double padding_;
    final String tag_;
    final Color bgColor_;
    final double elevation_;
    final double tagFontSize_;
    final bool toUpperCase_;
    final CrossAxisAlignment axisAlignment_;

    const TitleLabeler({
        super.key,
        this.tag_ = 'title',
        this.toUpperCase_ = false,
        this.elevation_ = 0,
        this.tagFontSize_ = 15,
        this.height_ = 60,
        this.width_ = 60,
        this.bgColor_ = Colors.transparent,
      this.padding_=0,
        this.axisAlignment_ = CrossAxisAlignment.center
    });

    @override
    Widget build(BuildContext context) 
    {
        return Row(
            crossAxisAlignment: axisAlignment_,
            children: [

                SizedLabeler(
                  tagFontSize_: tagFontSize_,
                    height_: height_,
                    width_: width_,
                    elevation_: elevation_,
                    bgColor_: bgColor_,
                    tag_: tag_,
                    padding_: padding_,
                    toUpperCase_: toUpperCase_
                )
            ]
        );
    }
}
