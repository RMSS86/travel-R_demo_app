import 'package:flutter/material.dart';
// import 'package:provider/provider.dart';
// import '../Theme/ThemeProvider.dart';

class MaterialWrapper extends StatelessWidget
{
  final double elevation_;
  final double radius_;
  final Widget wrapped_; // List<Widget>
  final Color bgColor_;
  final Color shadowColor_;
  final int animationDuration_;

  const MaterialWrapper({
    super.key,
    this.elevation_ = 9.0,
    this.radius_ = 12.0,
    this.bgColor_= Colors.transparent,
    this.shadowColor_= Colors.black54,
    this.animationDuration_=1500,
    required this.wrapped_
  });

  @override
  Widget build(BuildContext context)
  {
    return Material(
      color: bgColor_,
        shadowColor: shadowColor_,
        animationDuration:  Duration(milliseconds: animationDuration_),
        elevation: elevation_,
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(radius_)
        ),
        child: wrapped_
    );
  }
}


