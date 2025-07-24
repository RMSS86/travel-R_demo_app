import 'package:flutter/material.dart';

import '../UI/elements/filters/BlurFilter.dart';

class PageContent extends StatelessWidget
{
    final String? bgImageSrc_;
    final bool isNetwordImage_;
    final Color? bgColor_;
    final List<Widget> children_;
    final double padding_;
    final double verticalPadding_;
    final double horizontalPadding_;
    final bool symetricalPadding_;
    final bool active_;

    final bool extendBodyBehindAppBar_;
    final bool extendBody_;

    const PageContent({super.key,
        required this.bgImageSrc_,
        this.isNetwordImage_ = false,
        this.bgColor_,
        this.padding_ = 25.0,
        this.verticalPadding_ = 25.0,
        this.horizontalPadding_ = 25.0,
        this.symetricalPadding_ = true,
        this.extendBodyBehindAppBar_= true,
        this.extendBody_=false,
        this.active_=false,
        required this.children_

    });

    @override
    Widget build(BuildContext context)
    {
        final ImageProvider<Object> ImagetargetImage_ = isNetwordImage_ ?
            NetworkImage(bgImageSrc_!)
            : AssetImage(bgImageSrc_!);

        return Scaffold(
            extendBodyBehindAppBar: extendBodyBehindAppBar_, //ANDROID ONLY
            extendBody: extendBody_, //ANDROID ONLY
            backgroundColor: bgColor_,
            body: Container(
                height: double.infinity,
                width: double.infinity,
                decoration: BoxDecoration(
                    image: DecorationImage(image: ImagetargetImage_
                        , fit: BoxFit.fill)
                ),
                child: Padding(
                    padding: symetricalPadding_ ? EdgeInsets.all(padding_) : EdgeInsets.symmetric(vertical: verticalPadding_, horizontal: horizontalPadding_),

                      child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: children_
                      ),

                ),
            ),
        );
    }
}
