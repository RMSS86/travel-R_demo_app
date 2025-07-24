import 'dart:ui';

import 'package:flutter/material.dart';

class BlurFilterPositioned extends StatelessWidget
{
  final double sigmaX_;
  final double sigmaY_;
  final double sigmaNone_;
  final bool active_;
  final Widget child_;

  const BlurFilterPositioned({super.key, this.sigmaX_ = 20, this.sigmaY_ = 10, this.active_ = false, this.sigmaNone_ = 0, required this.child_});

  @override
  Widget build(BuildContext context)
  {
    return Positioned.fill(
        child: BackdropFilter(
            filter: ImageFilter.blur(
                sigmaX: active_ ? sigmaX_ : sigmaNone_,
                sigmaY: active_ ? sigmaY_ : sigmaNone_),
            // child: SizedBox()));
            child:child_ ));
  }
}
