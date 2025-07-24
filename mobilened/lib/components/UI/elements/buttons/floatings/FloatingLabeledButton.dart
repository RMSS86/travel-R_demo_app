import 'package:flutter/material.dart';
import 'package:trax/components/UI/elements/material/MaterialWrapper.dart';

import '../../../../../CAT/Media/MediaCAT.dart';
import '../../media/logo/LogoBoxHero.dart';

class FloatingLabeledButton extends StatelessWidget {
  final double? buttonPos_;
  final String logoSrc_;
  final String heroTag_;
  final double spacer_;
  final double left_;
  final double right_;
  final double radius_;
  final IconData icon_;
  final double iconSize_;
  final double logoPadding_;
  final double logoSize_;

  const FloatingLabeledButton({
    super.key,
    this.buttonPos_,
    this.logoSrc_=MediaCAT.LogoLetters_only_white,
    this.heroTag_='hero',
    this.spacer_=21.0,
    this.left_=0,
    this.right_=0,
    this.radius_=16.0,
    this.icon_= Icons.close,
    this.iconSize_=24,
    this.logoPadding_=3.0,
    this.logoSize_=70,
  });

  @override
  Widget build(BuildContext context) {
    return Positioned(
          left: left_,
          right: right_,
          bottom: buttonPos_,

          child: Column(
            children: [

              MaterialWrapper(
                elevation_: 12,
                wrapped_: CircleAvatar(
                    radius: radius_,
                    backgroundColor: Colors.black54,
                    child: Icon(
                        icon_,
                        size: iconSize_,
                        color: Colors.white
                    )
                ),
              ),

              SizedBox(height: spacer_,),
              //< LogoBox
              LogoBoxHero(
                  padding_: logoPadding_,
                  heroTag_: heroTag_,
                  logoSrc_: logoSrc_,
                  width_: logoSize_
              ),
            ],
          )
      );
  }
}
