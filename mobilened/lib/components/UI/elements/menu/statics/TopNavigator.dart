import 'package:flutter/material.dart';
import '../../buttons/lettered/ButtonTile.dart';
import '../../material/MaterialWrapper.dart';

class TopNavigator extends StatelessWidget
{
    final double elevation_;
    final double radius_;
    final double padding_;
    final Color bgColor_;

    const TopNavigator({
        super.key,
        this.elevation_ = 9.0,
        this.radius_ = 12.0,
        this.padding_ = 12.0,
        this.bgColor_= const Color(0x25434040),//43404025

    });

    @override
    Widget build(BuildContext context) 
    {
        return MaterialWrapper(
          bgColor_: bgColor_,
            elevation_: elevation_,
            radius_: radius_,
            wrapped_: Padding(
                padding: EdgeInsets.all(padding_),

                child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    mainAxisSize: MainAxisSize.min,
                    children: [

                        ButtonTiler(
                            elevation_: 0,
                            symetricalPadding_: false,
                            verticalPadding_: 1.0,
                            horizontalPadding_: 15.0,
                            tagTextColor_: Colors.white,
                            tagFontSize_: 14.6,
                            tagTextweight_: FontWeight.w300,
                            tag_: "Home"
                        ),

                        ButtonTiler(
                            elevation_: 0,
                            symetricalPadding_: false,
                            verticalPadding_: 1.0,
                            horizontalPadding_: 15.0,
                            tagTextColor_: Colors.white,
                            tagFontSize_: 14.6,
                            tagTextweight_: FontWeight.w300,
                            tag_: "Account"
                        ),

                        ButtonTiler(
                            elevation_: 0,
                            symetricalPadding_: false,
                            verticalPadding_: 1.0,
                            horizontalPadding_: 15.0,
                            tagTextColor_: Colors.white,
                            tagFontSize_: 14.6,
                            tagTextweight_: FontWeight.w300,
                            tag_: "Discover"
                        ),

                        ButtonTiler(
                            onTap_: ()
                            {
                                print('logOut!');
                            },
                            withBorder_: true,
                            elevation_: 0,
                            symetricalPadding_: false,
                            verticalPadding_: 1.0,
                            horizontalPadding_: 15.0,
                            tagFontSize_: 14.6,
                            tagTextweight_: FontWeight.w300,
                            tag_: "LogOut"
                        )

                    ]
                )
            )
        );
    }
}
