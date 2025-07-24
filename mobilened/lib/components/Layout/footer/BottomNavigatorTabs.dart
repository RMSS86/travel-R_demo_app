import 'package:flutter/material.dart';
import 'package:google_nav_bar/google_nav_bar.dart';

List<GButton> BottomNavTabs() {
  return const [
    GButton(
      icon: Icons.home,
      text: 'Home',
    ),
    GButton(
      icon: Icons.explore,
      text: 'Tours',
    ),
    GButton(
      icon: Icons.amp_stories_outlined,
      text: 'Artistic',
    ),
    GButton(
      icon: Icons.account_circle,
      text: 'Account',
    ),

  ];
}