////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS///
////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS///
import 'package:flutter/material.dart';
import 'package:trax/CAT/Media/MediaCAT.dart';
import 'package:trax/components/pages/home/HomePage.dart';
import '../../Layout/ComplexPageContent.dart';
import '../../Layout/footer/BottomNavigator.dart';
import '../../Layout/header/AppBarBuilder.dart';
import '../../UI/elements/drawers/GeneralDrawer.dart';
import '../../UI/elements/drawers/drawer_tile_lists/Drawer_tile_list.dart';
import '../../UI/elements/menu/dynamics/Drawers/PopNavigator.dart';
import '../../UI/elements/wrappers/PreventBackPage.dart';
import '../tours/ToursPage.dart';
////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS///
////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS///

class LandingPage extends StatefulWidget {
  const LandingPage({super.key});

  @override
  State<LandingPage> createState() => _LandingPageState();
}

class _LandingPageState extends State<LandingPage> {

  int _selectedIndex = 0;//< GLOBAL PAGE SELECTOR

  @override
  Widget build(BuildContext context) {

    return PreventBackScope(//< PREVENTS BACK BUTTON

      child_: ComplexPageContent(//< SCAFFOLD
        isNetwordImage_: false,
        bgImageSrc_: MediaCAT.BrandImage3,

        bottomNavBar_: BottomNavBar(//< BOTTOM NAV BAR
          onTabChange: (index) => navigateBottomBar(index) ,) ,

        drawer_:  Drawer_(drawerTiles_: DrawerTileList(context) ,) ,
        pageBody_: _pages[_selectedIndex], //< BODY

        avatar_: PopNavigator(//< AVATAR
          imgSrc_: MediaCAT.userOne,
        ),
      ),
    );
  }

  ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////
  ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////
  void navigateBottomBar(int index) {//< UI UPDATE ON TAB CHANGE
    setState(() {
      _selectedIndex = index;
    });
  }

  //< NAVIGATION PAGES
  final List<Widget> _pages = [
    const HomePage(),
    const ToursPage(),
    // const HotPicksPage(),
    // const ShoppingPage(),
    // const GalleryPage(),
    // const StoriesPage(),
  ];

////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////
////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////
}
