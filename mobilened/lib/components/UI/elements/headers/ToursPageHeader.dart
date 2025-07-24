import 'package:flutter/material.dart';
import 'package:trax/CAT/Media/MediaCAT.dart';
import '../floats/labels/Labeler.dart';
import '../menu/statics/TopNavigator.dart';
import '../spacers/Spacer.dart';
import 'ImagedPageHeader.dart';

class ToursPageHeader extends StatelessWidget {
  const ToursPageHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return ImagedPageHeader(
      imageSrc_: MediaCAT.BrandImage3,
      height_: 399,
      children_: [

        //< CHILDREN COMPONENTS
        WHSpacer(height_: 126.0),

        const Labeler(
          elevation_: 0.0,
            symetricalPadding_: false,
            verticalPadding_: 1.0,
            horizontalPadding_: 18.0,
            tag_: "TOURS",
            tagTextColor_: Colors.white,
            tagFontSize_: 72.6,
            tagTextweight_: FontWeight.w300
        ),

        //< CHILDREN COMPONENTS
        WHSpacer(height_: 72.0),

        //< TOP NAVIGATOR
        TopNavigator(
            elevation_: 0.3,
            radius_: 25.0,
            padding_: 24.0
        ),

      ],
    );
  }
}
