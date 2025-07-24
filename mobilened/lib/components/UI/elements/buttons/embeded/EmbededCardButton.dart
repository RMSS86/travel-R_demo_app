import 'package:flutter/material.dart';
import 'package:trax/CAT/Media/MediaCAT.dart';
import '../floatings/IconBGFloatingButton.dart';
import '../floatings/IconFloatingBotton.dart';
import 'package:trax/components/UI/elements/material/MaterialWrapper.dart';

class EmbededCardButton extends StatelessWidget
{
    final double padding_;
    final double verticalPadding_;
    final double horizontalPadding_;
    final bool symetricalPadding_;
    final Color bgColor_;
    final double radius_;
    final double height_;
    final double width_;
    final List<Widget> leftColumnChildren_;
    final List<Widget> rightColumnChildren_;

    const EmbededCardButton({super.key,
        this.padding_ = 0.0,
        this.verticalPadding_ = 0.0,
        this.horizontalPadding_ = 0.0,
        this.symetricalPadding_ = true,
        this.radius_ = 8.0,
        this.height_ = 8.0,
        this.width_ = 8.0,
        this.bgColor_ = Colors.transparent,
      required this.leftColumnChildren_,
      required this.rightColumnChildren_,
    });

    @override
    Widget build(BuildContext context)
    {
        return Padding(
            padding: symetricalPadding_ ?
                EdgeInsets.all(padding_) :
                EdgeInsets.symmetric(vertical: verticalPadding_, horizontal: horizontalPadding_),

            child: MaterialWrapper(
                wrapped_: Container(
                    height: height_,
                    width: width_,
                    decoration: BoxDecoration(
                        color: bgColor_,
                        borderRadius: BorderRadius.circular(radius_)
                    ),

                    //< MAIN STRUCTURE
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [

                            //< TWO SIDE COMMAND BUTTONS
                            Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: leftColumnChildren_,
                            ),

                            //< GO TO TOUR BUTTON
                            Column(//>
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: rightColumnChildren_,
                            )
                        ]
                    )
                )
            )
        );
    }
}
