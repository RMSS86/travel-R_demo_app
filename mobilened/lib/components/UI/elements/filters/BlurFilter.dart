import 'dart:ui';

import 'package:flutter/material.dart';

class BlurFilter extends StatelessWidget
{
    final double sigmaX_;
    final double sigmaY_;
    final double sigmaNone_;
    final bool active_;
    final Widget child_;

    const BlurFilter({super.key, this.sigmaX_ = 3, this.sigmaY_ = 3, this.active_ = false, this.sigmaNone_ = 0, required this.child_});

    @override
    Widget build(BuildContext context)
    {
        return BackdropFilter(
            filter: ImageFilter.blur(
                sigmaX: active_ ? sigmaX_ : sigmaNone_,
                sigmaY: active_ ? sigmaY_ : sigmaNone_),
           // child: SizedBox()));
            child:child_ );
    }
}
