import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../material/MaterialWrapper.dart';


class CustomLabeledMaterialButton extends StatelessWidget {

  final String label_;
  final Color labelColor_;
  final double fontSize_;
  final double spacer_;
  final IconData icon_;
  final Color iconColor_;
  final double elevation;
  final double radius;
  final VoidCallback? onTap_;
  final Color buttonColor_;
  final bool customButtonColor_;

  /// Class for creating a combined customizable [ Widget ]
  /// Composed by a [ Text ] and a [ MaterialWrapper ],
  /// All values on default tag add with an add icon
  /// the [ VoidCallback ] function passed down through [ onTap_ ],
  /// must be void, remember if using a provider to [ NotifyProvider ] it.
  const CustomLabeledMaterialButton({
    super.key,
    this.label_= 'Add',
    this.icon_= Icons.add,
    this.labelColor_= Colors.white,
    this.spacer_=15,
    this.fontSize_=21,
    this.elevation=9,
    this.iconColor_=Colors.white,
    this.radius = 12,
    this.buttonColor_ = Colors.transparent,
    this.customButtonColor_=false,
    this.onTap_,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [

        Text(label_,
          style: GoogleFonts.bebasNeue(
            fontSize: fontSize_,
            color: labelColor_,
          ),),

        SizedBox(width: spacer_),

        GestureDetector(
          onTap: onTap_,
          child: MaterialWrapper(
            elevation_: elevation,
            radius_: radius,
            wrapped_: Container(
                padding: const EdgeInsets.all(20),
                decoration:   BoxDecoration(
                    color: buttonColor_,
                    borderRadius:
                    BorderRadius.all(
                      Radius.circular(radius),)
                ),
                child: Icon(icon_, color: iconColor_,)),
          ),
        ),
      ],
    );
  }
}


