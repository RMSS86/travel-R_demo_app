import 'package:flutter/material.dart';

class AppBarBuild extends StatefulWidget
{
    final Color bgColor_;
    final double elevation_;
    final double padding_;
    final IconData menuIcons_;
    final Color iconColor_;
    final BuildContext context_;
    const AppBarBuild({
        super.key,
        this.bgColor_ = Colors.transparent,
        this.elevation_ = 0,
      this.padding_=1.0,
      this.menuIcons_ =  Icons.menu,
      this.iconColor_ = Colors.white,
      required this.context_, //Theme.of(context).colorScheme.inversePrimary,
    });

  @override
  State<AppBarBuild> createState() => _AppBarBuildState();
}

class _AppBarBuildState extends State<AppBarBuild> {
    @override
    PreferredSizeWidget build(BuildContext context_)
    {
        return AppBar(
            backgroundColor: widget.bgColor_,
            elevation: widget.elevation_,
            leading: Builder(builder: (context_)
                {
                    return Padding(
                        padding:  EdgeInsets.all(widget.padding_),
                        child: IconButton(
                            icon:  Icon(
                                widget.menuIcons_,
                                    size: 24.0,
                            ),
                            color: widget.iconColor_,
                            onPressed: ()
                            {
                                Scaffold.of(context_).openDrawer();
                            }
                        )
                    );
                }
            )
        );
    }
}
