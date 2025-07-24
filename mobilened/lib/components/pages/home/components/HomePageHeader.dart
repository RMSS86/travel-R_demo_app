import 'package:flutter/material.dart';
import 'package:trax/components/UI/elements/headers/ImagedPageHeader.dart';
import '../../../../CAT/Media/MediaCAT.dart';
import '../../../../query/http.dart';
import '../../../../utility/constants/Konstants.dart';
import '../../../UI/elements/buttons/ElevatedButton.dart';
import '../../../UI/elements/buttons/lettered/ButtonTile.dart';
import '../../../UI/elements/floats/labels/Labeler.dart';
import '../../../UI/elements/material/MaterialWrapper.dart';
import '../../../UI/elements/menu/statics/TopNavigator.dart';
import '../../../UI/elements/spacers/Spacer.dart';

class HomePageHeader extends StatelessWidget
{
    final double height_;
    final double elevation_;
    final double radius_;

    final double Hpadding_;
    final double Vpadding_;

    const HomePageHeader({
        super.key,
        this.height_ = 765,
        this.elevation_ = 12,
        this.radius_ = 25.0,
        this.Hpadding_ = 0,
        this.Vpadding_ = 0
    });

    @override
    Widget build(BuildContext context)
    {
        return ImagedPageHeader(
            elevation_: elevation_,
            height_: height_,
            radius_: radius_,
            imageSrc_: MediaCAT.BrandImage2,

            children_: [

                //< CHILDREN COMPONENTS
                WHSpacer(height_: 230.0),

                //< LOGO
                Image.asset(
                    MediaCAT.Logo_white,
                    height: 72
                ),

                //< CHILDREN COMPONENTS
                WHSpacer(height_: 30.0),

                //< LOGO
                Image.asset(
                    MediaCAT.LogoLetters_only_white,
                    height: 100
                ),

                //< SLOGAN
                const Labeler(
                    symetricalPadding_: false,
                    verticalPadding_: 1.0,
                    horizontalPadding_: 18.0,
                    tag_: "I n s t a n t   M e m o r i e s",
                    tagTextColor_: Colors.white,
                    tagFontSize_: 14.6,
                    tagTextweight_: FontWeight.w300
                ),

                //< SPACER
                WHSpacer(height_: 24.0),

                MaterialElevatedButton(
                    elevation_: 0.3,
                    //btnColor_: ,
                    tag_: 'DISCOVER THE WORLD',
                    tagFontSize_: 13.2,
                    Hpad_: 72.0,
                  onTap_: (){
                      //HTTP();
                    getTours(targetURL_: 'https://www.natours.dev/api/v1/tours/top-5-cheap');
                      },
                ),

                //< SPACER
                WHSpacer(height_: 105.0),

                //< TOP NAVIGATOR
                TopNavigator(
                    elevation_: 0.3,
                    radius_: 25.0,
                    padding_: 24.0
                )

            ]
        );
    }
}

///https://natours.dev/img/tours/tour-5cdb06c8d87ca1051d90eda9-1557860998703-1.jpeg