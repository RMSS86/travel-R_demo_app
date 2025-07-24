import 'package:flutter/material.dart';

import '../../../../CAT/Media/MediaCAT.dart';
import 'drawer_elements/DrawerTile.dart';

class Drawer_ extends StatelessWidget
{
    final Color bgColor_;
    final String topLogo_;
    final double paddingHorizontal_;
    final List<DraweTile> drawerTiles_;

    const Drawer_({
        super.key,
        this.bgColor_ = Colors.black54,
        this.topLogo_ = MediaCAT.LogoLetters_only_white,
        this.paddingHorizontal_ = 50.0,
        required this.drawerTiles_,
    });

    @override
    Widget build(BuildContext context) 
    {
        return Drawer(
            backgroundColor: bgColor_,
            child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                    //< LOGO SECTION
                    Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                            Padding(
                                padding: EdgeInsets.symmetric(horizontal: paddingHorizontal_),
                                child: Divider(
                                    color: Colors.grey[900]
                                )
                            ),

                            DrawerHeader(
                                child: Image.asset(topLogo_)
                            ),

                            Padding(
                                padding: EdgeInsets.symmetric(horizontal: paddingHorizontal_),
                                child: Divider(
                                    color: Colors.grey[900]
                                )
                            ),

                          Column(
                            children: drawerTiles_,
                          ),//< DRAWERTILES
                        ]
                    )

                ]
            )
        );
    }
}
