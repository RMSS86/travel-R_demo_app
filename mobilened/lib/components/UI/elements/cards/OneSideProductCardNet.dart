import 'package:flutter/material.dart';
import 'package:trax/CAT/Media/MediaCAT.dart';
import 'package:trax/components/UI/elements/floats/labels/Labeler.dart';
import '../../../../models/types/TourTypes.dart';
import '../../../../models/types/UserTypes.dart';
import '../buttons/embeded/EmbededCardButton.dart';
import '../buttons/floatings/IconBGFloatingButton.dart';
import '../buttons/floatings/IconFloatingBotton.dart';
import '../material/MaterialWrapper.dart';
import 'package:google_fonts/google_fonts.dart';

const String tourName_ = 'The Northern Lights';
const double RightPadding_ = 18.0;

class OneSidedProductCardNet extends StatelessWidget
{

  double? cardHeight_;
  TourType tour_;
  String? id_;
  String? name;
  double? duration;
  double? maxGroupSize;
  String? difficulty;

  double? ratingsAverage;
  double? ratingsQuantity;
  int? price; //> CHANGE TO DOUBLE ON OUR BACKEND
  double? priceDiscount;

  String? summary;
  String? description;
  String? imageCover;
  List<String>? images;
  String? startDates;
  bool? trending;
  Location? startLocation;
  void Function()? onTap_;

  OneSidedProductCardNet({
    super.key,
    this.cardHeight_=360,
    this.onTap_,
    this.id_,
    this.name,
    this.description,
    this.price,
    this.difficulty,
    this.duration,
    this.imageCover,
    this.images,
    this.maxGroupSize,
    this.priceDiscount,
    this.ratingsAverage,
    this.ratingsQuantity,
    this.startDates,
    this.startLocation,
    this.summary,
    this.trending,
    required this.tour_,
  });

  @override
  Widget build(BuildContext context)
  {
    return Padding(
        padding: const EdgeInsets.all(15.0),

        //< MATERIAL DESIGN WRAPPER
        child: MaterialWrapper(

            wrapped_:
            //< MAIN CONTAINER
            Container(
                margin: const EdgeInsets.only(left: 0),
                width: double.infinity,
                height: cardHeight_,

                //< DECORATION
                decoration: BoxDecoration(
                    color: Theme.of(context).colorScheme.inverseSurface,
                    borderRadius: BorderRadius.circular(18),
                    image: DecorationImage(image:
                    AssetImage(MediaCAT.BrandImage3),
                        fit: BoxFit.cover)
                ),

                //< PACE GUIDED BY A COLUMN
                child: Column(
                  //< BOTH ROWS WILL OCCUPY THE OPPOSITE SIDES OF THE FRAME
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [

                      //< TWO ELEMENTS, EXTREME CORNERS
                      Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            //< CORNER LEFT
                            Padding(
                              padding: const EdgeInsets.all(15.0),
                              child: IconFloatingButton(
                                  logoSize_: 72,
                                  elevation_: 3,
                                  logoSrc_: MediaCAT.Logo_white,
                                  onTap_: ()
                                  {
                                    print('from LOGO!');
                                  }
                              ),
                            ),
                            // < CORNER RIGHT
                          ]
                      ),

                      Row(
                        //< CONTAINS TOUR INFO
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [

                            Column(
                                mainAxisAlignment: MainAxisAlignment.end,
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [

                                  //< TOUR HEADING NAME
                                  Labeler(
                                      elevation_: 0,
                                      toUpperCase_: true,
                                      tagFontSize_: 24,
                                      horizontalPadding_: RightPadding_,
                                      verticalPadding_: 3.0,
                                      symetricalPadding_: false,
                                      labelDirCenter_: false,
                                      labelDirLeft_: false,
                                      tag_: '${tour_.name?.split(' ')[0]} ${tour_.name?.split(' ')[1]} \n ${tour_.name?.split(' ')[2]}' //'${tourName_.split(' ')[0]}' ,//'The Northern \n Lights',

                                  ),

                                  //< CARD BUTTON ELEMENT
                                  //>
                                  EmbededCardButton(
                                      height_: 80,
                                      width_: 90,
                                      horizontalPadding_: 3,
                                      verticalPadding_: 3.0,
                                      symetricalPadding_: false,
                                      bgColor_: Colors.black54,

                                      leftColumnChildren_: [
                                        //>
                                        IconFloatingButton(
                                            logoSize_: 18,
                                            elevation_: 0,
                                            logoSrc_: MediaCAT.Logo_white,
                                            onTap_: ()
                                            {
                                              print('from LOGO!');
                                            }
                                        ),

                                        IconFloatingButton(
                                            logoSize_: 18,
                                            elevation_: 0,
                                            logoSrc_: MediaCAT.googeLocIcon,
                                            onTap_: ()
                                            {
                                              print('from Locations!!');
                                            }
                                        )
                                      ],

                                      rightColumnChildren_: [

                                        Padding(
                                            padding: const EdgeInsets.only(left: 3.0),
                                            child: IconBGFloatingButton(
                                                height_: 66,
                                                width_: 45,
                                                radius_: 12,
                                                bgColor_: Color(0xff14c18b),//Colors.white60,
                                                logoSize_: 30,
                                                elevation_: 12,
                                                logoSrc_: MediaCAT.arrowGoIcon,
                                                onTap_: ()
                                                {
                                                  print('FROM TOUR ${tour_.name}');
                                                }
                                            )
                                        )
                                      ]
                                  ),

                                  //< FOOTER LOGO
                                  Padding(
                                      padding: EdgeInsets.only(bottom: RightPadding_, right: RightPadding_),
                                      child: Image.asset(
                                          MediaCAT.LogoLetters_only_white,
                                          width: 60)
                                  )
                                ]
                            )
                          ]
                      )

                    ]
                )
            )
        )
    );
  }
}
