import 'package:flutter/material.dart';
import '../../../providers/TOURProvider.dart';
import '../../UI/elements/builders/future_builders/TourFutureBuilder.dart';
import '../../UI/elements/buttons/ElevatedButton.dart';
import '../../UI/elements/labels/TitleLabeler.dart';

class ToursSections extends StatelessWidget {
  const ToursSections({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,

      children: <Widget>[

        Container(
          //< NEGATIVE MARGIN
          transform: Matrix4.translationValues(0.0, 0.0, 0.0),

          //< TOUR SECTIONS TITLE
          child: TitleLabeler(
            padding_:9,
            tag_: 'Our Tours',
            toUpperCase_: true,
            bgColor_: Colors.transparent,//Color(0xFF52505040),
            axisAlignment_: CrossAxisAlignment.center,
            elevation_:0.06,
            tagFontSize_: 18,
            height_: 42,
            width_: 390,
          ),
        ),

        //< TOUR LIST MAKER
        TourFutureBuilder(
          tourData_: TourProvider.allToursFuture,
        ),

        //< GREEN BUTTON
        Padding(
          padding: const EdgeInsets.only(left: 72),
          child: MaterialElevatedButton(
            tag_: 'DISCOVER NOW',
            btnColor_: const Color(0xFF55c57a),
          ),
        ),

      ],
    );
  }
}
