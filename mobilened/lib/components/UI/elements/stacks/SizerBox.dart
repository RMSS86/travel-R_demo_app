import 'package:flutter/material.dart';

class SizerBox extends StatelessWidget
{
    final double? width_;
    final double? height_;
    final Widget widget_;
    const SizerBox({super.key, this.width_, this.height_, required this.widget_});

    @override
    Widget build(BuildContext context) 
    {
        return SizedBox(
            height: height_,
            width: width_,
            child: widget_
        );
    }
}
