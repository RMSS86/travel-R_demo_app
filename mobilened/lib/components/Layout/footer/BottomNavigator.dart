import 'package:google_nav_bar/google_nav_bar.dart';
import 'package:line_icons/line_icons.dart';
import 'package:flutter/material.dart';

import 'BottomNavigatorTabs.dart';

class BottomNavBar extends StatelessWidget {
  void Function(int)? onTabChange;
  final double tabBorderRadius_;
  final double gap_;
  final double verticalPadding_;
  final double gNavPadding_;

  BottomNavBar({
    super.key,
    this.tabBorderRadius_=15,
    this.gap_=3,
    this.verticalPadding_=3,
    this.gNavPadding_=12.0,
    required this.onTabChange,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(vertical: verticalPadding_),
        child: GNav(
          padding:  EdgeInsets. all(gNavPadding_),
            color: Theme.of(context).colorScheme.inverseSurface,
            activeColor: Theme.of(context).colorScheme.inversePrimary,
            tabActiveBorder:
            Border.all(color: Theme.of(context).colorScheme.inverseSurface),
            tabBackgroundColor: Theme.of(context).colorScheme.secondary,
            mainAxisAlignment: MainAxisAlignment.center,
            tabBorderRadius: tabBorderRadius_,
            gap: gap_,
            onTabChange: (value) => onTabChange!(value),
            tabs: BottomNavTabs()));
  }

}

