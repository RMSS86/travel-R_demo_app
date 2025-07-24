import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'package:trax/components/UI/elements/cards/OneSideProductCardNet.dart';
import 'package:trax/components/UI/elements/floats/labels/Labeler.dart';
import '../../../../models/types/TourTypes.dart';
import '../../../../providers/TOURProvider.dart';
import '../../../../query/http.dart';
import '../../../UI/elements/builders/future_builders/TourFutureBuilder.dart';
import '../../../UI/elements/buttons/ElevatedButton.dart';
import '../../../UI/elements/cards/OneSideProductCard.dart';
import '../../../UI/elements/labels/TitleLabeler.dart';

class TopToursSections extends StatelessWidget {

  const TopToursSections({
    super.key,

  });

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
            padding_:12,
            tag_: 'popular tours',
            toUpperCase_: true,
            bgColor_: Color(0xFF52505040),
            axisAlignment_: CrossAxisAlignment.start,
            elevation_:0,
            tagFontSize_: 18,
            height_: 48,
            width_: 270,
          ),
        ),

        //< TOUR LIST MAKER
        TourFutureBuilder(
          tourData_: TourProvider.topToursFuture,
        ),
         //OneSidedProductCard(),

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

