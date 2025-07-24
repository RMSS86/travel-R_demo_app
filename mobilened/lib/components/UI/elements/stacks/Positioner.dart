import 'package:flutter/material.dart';

class Positioner extends StatelessWidget
{
    final Widget child_;
    final double widthRatio_;
    final double? top_;
    final double? right_;
    final double? left_;
    final double? bottom_;

    const Positioner({
        super.key,
        this.widthRatio_ = 1.9,
        this.top_,
        this.right_,
        this.left_,
        this.bottom_,
        required this.child_});

    @override
    Widget build(BuildContext context) 
    {
        return Positioned(
            top: top_,
            right: right_,
            left: left_,
            bottom: bottom_,
            width: MediaQuery.of(context).size.width * widthRatio_,
            child: child_);
    }
}
