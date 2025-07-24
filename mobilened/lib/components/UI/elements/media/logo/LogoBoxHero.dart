import 'package:flutter/material.dart';

class LogoBoxHero extends StatefulWidget
{
    final String? heroTag_;
    final String? logoSrc_;
    final double padding_;
    final double verticalPadding_;
    final double horizontalPadding_;
    final bool symetricalPadding_;
    final bool isNetwordImage_;
    final double width_;
    final double? height_;

    const LogoBoxHero({
        super.key,
        this.heroTag_,
        this.logoSrc_,
        this.padding_ = 3.0,
        this.verticalPadding_ = 25.0,
        this.horizontalPadding_ = 25.0,
        this.symetricalPadding_ = true,
        this.isNetwordImage_ = false,
        this.width_ = 180.00,
        this.height_,
    });

  @override
  State<LogoBoxHero> createState() => _LogoBoxHeroState();
}

class _LogoBoxHeroState extends State<LogoBoxHero> {
    @override
    Widget build(BuildContext context)
    {
        return Center(
            child: Padding(
                padding: widget.symetricalPadding_ ? EdgeInsets.all(widget.padding_) : EdgeInsets.symmetric(vertical: widget.verticalPadding_, horizontal: widget.horizontalPadding_),
                child: Hero(
                    tag: [widget.heroTag_],
                    child: widget.isNetwordImage_ ?
                        Image.network(widget.logoSrc_!, width: widget.width_, height: widget.height_ )
                        : Image.asset(widget.logoSrc_!, width: widget.width_, height: widget.height_ )
                )
            )
        );
    }
}
