import 'package:flutter/material.dart';
import 'package:trax/CAT/Media/MediaCAT.dart';
import 'package:trax/components/Layout/PageContent.dart';
import '../../../utility/constants/Konstants.dart';
import '../UI/elements/material/MaterialWrapper.dart';

class ElevationPage extends StatefulWidget
{
    final List<Widget> children_;
    final Color bgColor_;

    const ElevationPage({
        super.key,
        this.bgColor_ = Colors.white12,
        required this.children_
    });

    @override
    State<ElevationPage> createState() => _ElevationPageState();
}

class _ElevationPageState extends State<ElevationPage>
{
    @override
    Widget build(BuildContext context)
    {
        return MaterialWrapper(
            elevation_: 12,
            radius_: 25.0,

            wrapped_: ClipRRect(
                borderRadius: BorderRadius.only(bottomLeft: Radius.circular(25), bottomRight: Radius.circular(25)),
                child: Scaffold(

                    backgroundColor: widget.bgColor_,
                    extendBodyBehindAppBar: true,
                    extendBody: true,

                    body: Container(
                        height: double.infinity,
                        width: double.infinity,
                        decoration: BoxDecoration(
                        //<
                            borderRadius: BorderRadius.all(
                                Radius.circular(25.0)
                            )
                        ),

                        child: ListView(
                            padding: EdgeInsets.zero,
                            children: widget.children_
                        )

                    )
                )
            )
        );
    }
}


