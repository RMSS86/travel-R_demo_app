import 'package:flutter/material.dart';
import '../../../../CAT/Media/MediaCAT.dart';
import '../../../../utility/constants/Konstants.dart';
import '../../../UI/elements/floats/labels/Labeler.dart';
import '../../../UI/elements/material/MaterialWrapper.dart';
import '../../../UI/elements/spacers/Spacer.dart';

class ImagedPageHeader extends StatelessWidget
{
    final double height_;
    final double elevation_;
    final double radius_;
    final String imageSrc_;

    final double Hpadding_;
    final double Vpadding_;
    final List<Widget> children_;

    const ImagedPageHeader({
        super.key,
        this.height_ = 765,
        this.elevation_ = 12,
        this.radius_ = 25.0,
        this.Hpadding_ = 0,
        this.Vpadding_ = 0,
        required this.children_,
        this.imageSrc_ = MediaCAT.BrandImage2
    });

    @override
    Widget build(BuildContext context) 
    {
        return MaterialWrapper(
            elevation_: elevation_,
            radius_: radius_,
            wrapped_: Container(
                height: height_,

                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(UIKonst.kBlocksBorderRadius),
                    image: DecorationImage(
                        image: AssetImage(imageSrc_),
                        fit: BoxFit.cover
                    )),

                child: Container(
                    padding:
                    EdgeInsets.symmetric(horizontal: Hpadding_, vertical: Vpadding_),
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,

                        children: children_
                    )
                )
            )
        );
    }
}
