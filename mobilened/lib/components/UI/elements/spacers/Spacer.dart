import 'package:flutter/material.dart';

class WHSpacer extends StatelessWidget
{
    final double width_;
    final double height_;

    const WHSpacer({
        super.key,
        this.height_ = 0,
        this.width_ = 0
    });

    @override
    Widget build(BuildContext context)
    {
        return SizedBox(
            height: height_,
            width: width_ 
        );
    }
}
