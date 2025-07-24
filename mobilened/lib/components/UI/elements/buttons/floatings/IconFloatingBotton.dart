import 'package:flutter/material.dart';
import '../../../../../CAT/Media/MediaCAT.dart';
import '../../media/logo/LogoBoxHero.dart';
import 'package:trax/components/UI/elements/material/MaterialWrapper.dart';

class IconFloatingButton extends StatelessWidget
{
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
    final double elevation_;
    final Color bgColor_;
    final void Function()? onTap_;

    const IconFloatingButton({
        super.key,
        this.buttonPos_,
        this.logoSrc_ = MediaCAT.infoIcon,
        this.heroTag_ = 'hero',
        this.spacer_ = 0.0,
        this.left_ = 0,
        this.right_ = 0,
        this.radius_ = 16.0,
        this.icon_ = Icons.close,
        this.iconSize_ = 24,
        this.logoPadding_ = 3.0,
        this.logoSize_ = 70,
        this.elevation_ = 3,
        this.onTap_,
        this.bgColor_ = Colors.transparent

    });

    @override
    Widget build(BuildContext context) 
    {
        return Column(
            children: [

                MaterialWrapper(
                    elevation_: elevation_,
                    wrapped_: GestureDetector(
                        onTap: onTap_,
                        child: CircleAvatar(
                            radius: radius_,
                            backgroundColor: bgColor_,
                            child: LogoBoxHero(
                                padding_: logoPadding_,
                                heroTag_: heroTag_,
                                logoSrc_: logoSrc_,
                                width_: logoSize_,
                            )
                        )
                    )
                )

            ]
        );
    }
}
