import 'package:flutter/material.dart';
import '../../CAT/Media/MediaCAT.dart';
import '../UI/elements/drawers/GeneralDrawer.dart';
import 'footer/BottomNavigator.dart';
import 'package:custom_floating_action_button_location/custom_floating_action_button_location.dart';
import 'header/AppBarBuilder.dart';

class ComplexPageContent extends StatelessWidget
{
    final String? bgImageSrc_;
    final bool isNetwordImage_;
    final Color? bgColor_;
    final double padding_;
    final double verticalPadding_;
    final double horizontalPadding_;
    final bool symetricalPadding_;
    final bool active_;
    final bool extendBodyBehindAppBar_;
    final bool extendBody_;
    final void Function()? floatingABAction_;
    final FloatingActionButton? floatingAB_;

    final BottomNavBar bottomNavBar_;
    final Widget pageBody_;
    final Drawer_ drawer_;
    final Widget avatar_;

    final double appBarElevation_;
    final Color appBarBgColor_;
    final double appBarPadding_;
    final IconData appBarMenuIcons_;
    final Color appBarIconColor_;

    ///Condensed component includes [ AppBar ] [ Body ] and generic [ Drawer ]
    /// background color can be applied, variable on [ materialApp ] and
    /// don't forget to pass the [ BuildContextt ] as [ context_ ]
    const ComplexPageContent({super.key,
        this.isNetwordImage_ = false,
        this.bgColor_, //< = Theme.of(context).colorScheme.surface,
        this.padding_ = 25.0,
        this.verticalPadding_ = 25.0,
        this.horizontalPadding_ = 25.0,
        this.symetricalPadding_ = true,
        this.extendBodyBehindAppBar_ = true,
        this.extendBody_ = false,
        this.active_ = false,

        this.appBarElevation_ = 0,
        this.appBarBgColor_ = Colors.transparent,
        this.appBarPadding_ = 12.0,
        this.appBarMenuIcons_ = Icons.menu,
        this.appBarIconColor_ = Colors.white,
        this.floatingABAction_,

        required this.bgImageSrc_,
        required this.bottomNavBar_,
        required this.pageBody_,
        required this.drawer_,
        required this.avatar_,
         this.floatingAB_,

    });

    @override
    Widget build(BuildContext context) 
    {

        //< BG IMAGE TYPE SELECTOR
        final ImageProvider<Object> ImagetargetImage_ = isNetwordImage_ ?
            NetworkImage(bgImageSrc_!)
            : AssetImage(bgImageSrc_!);

        return Scaffold(
            extendBodyBehindAppBar: extendBodyBehindAppBar_, //< ANDROID ONLY
            extendBody: extendBody_, //< ANDROID ONLY
            backgroundColor: bgColor_, //< PAGE BG COLOR
            bottomNavigationBar: bottomNavBar_,  //< BOTTOM NAV REQUIRED
            body: pageBody_, //< SINGLE FROM A LIST WIDGET
            drawer: drawer_, //< DRAWER INPUT
            appBar: AppBar(
                backgroundColor: appBarBgColor_,
                elevation: appBarElevation_,
                leading: Builder(builder: (context_)
                    {
                        return Padding(
                            padding: EdgeInsets.all(appBarPadding_),
                            child: IconButton(
                                icon: Icon(
                                    appBarMenuIcons_
                                ),
                                color: appBarIconColor_,
                                onPressed: ()
                                {
                                    Scaffold.of(context_).openDrawer();
                                }
                            )
                        );
                    }
                )
            ),
            floatingActionButtonLocation: CustomFloatingActionButtonLocation(xOffset: 290, yOffset: 780),
            floatingActionButton: FloatingActionButton.large(
                heroTag: "user-avatar",
                backgroundColor: const Color(0xFF93C3B9),
                onPressed: floatingABAction_,
                child: Stack(
                    fit: StackFit.expand,
                    children: [
                        const Center(
                            child: CircularProgressIndicator(),
                        ),
                        avatar_,

                    ],
                ),
            ),//< APP BAR INPUT
        );
    }
}
