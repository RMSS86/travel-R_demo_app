import 'package:flutter/material.dart';
import 'package:trax/components/pages/home/HomePage.dart';
import 'package:trax/components/pages/tours/ToursPage.dart';
import '../../../../../utility/constants/Konstants.dart';
import '../drawer_elements/DrawerTile.dart';

///Series of [ DraweTile ] passed on with context to be used
///by the [ Drawer ] element on the [ LandingPage ] custom [ AppBarr ]
List<DraweTile> DrawerTileList(BuildContext context_) {
  return [

    //< HOME
    DraweTile(
      paddingsleft: UIKonst.Kpaddingsleft,
      paddingsVertical: UIKonst.KpaddingsVertical,
      fontsizer: UIKonst.Kfontsizer,
      icon_: Icons.home,
      iconColor: Theme.of(context_).colorScheme.secondary,
      textColor: UIKonst.ktextColor,
      onTap_: () {
        Navigator.pop(context_);
        Navigator.push(
            context_,
            MaterialPageRoute(
                builder: (context_) =>  HomePage()));
      },
      text_: 'Home',
    ),

    //< TOURS
    // DraweTile(
    //   paddingsleft: UIKonst.Kpaddingsleft,
    //   paddingsVertical: UIKonst.KpaddingsVertical,
    //   fontsizer: UIKonst.Kfontsizer,
    //   icon_: Icons.shopping_cart,
    //   iconColor: Theme.of(context_).colorScheme.secondary,
    //   textColor: UIKonst.ktextColor,
    //   onTap_: () {
    //   Navigator.pop(context_);
    //   Navigator.push(
    //       context_,
    //   MaterialPageRoute(
    //   builder: (context) => const ToursPage()));
    //   },
    //   text_: 'Tours',
    // ),
  ];
}

//

//
// DraweTile(
// paddingsleft: Kpaddingsleft,
// paddingsVertical: KpaddingsVertical,
// fontsizer: Kfontsizer,
// icon_: Icons.shopping_cart,
// iconColor: Theme.of(context).colorScheme.secondary,
// textColor: ktextColor,
// onTap_: () {
// Navigator.pop(context);
// Navigator.push(
// context,
// MaterialPageRoute(
// builder: (context) => const CartScreen()));
// },
// text_: 'Cart',
// ),
// //////////OTHER PAGES
// DraweTile(
// paddingsleft: Kpaddingsleft,
// paddingsVertical: KpaddingsVertical,
// fontsizer: Kfontsizer,
// icon_: Icons.view_in_ar_sharp,
// iconColor: Theme.of(context).colorScheme.secondary,
// textColor: ktextColor,
// onTap_: () {
// Navigator.pop(context);
// Navigator.push(context,
// MaterialPageRoute(builder: (context) => const ARPage()));
// //Navigator.push(context, MaterialPageRoute(builder: (context)=>LocalAndWebObjectsWidget()));
// },
// text_: 'AR',
// ),
//
// DraweTile(
// paddingsleft: Kpaddingsleft,
// paddingsVertical: KpaddingsVertical,
// fontsizer: Kfontsizer,
// icon_: Icons.qr_code_scanner_outlined,
// iconColor: Theme.of(context).colorScheme.secondary,
// textColor: ktextColor,
// onTap_: () {
// Navigator.pop(context);
// Navigator.push(
// context,
// MaterialPageRoute(
// builder: (context) => const QREntryPage()));
// },
// text_: 'Scan',
// ),
//
// DraweTile(
// paddingsleft: Kpaddingsleft,
// paddingsVertical: KpaddingsVertical,
// fontsizer: Kfontsizer,
// icon_: Icons.multitrack_audio_sharp,
// iconColor: Theme.of(context).colorScheme.secondary,
// textColor: ktextColor,
// onTap_: () {
// Navigator.pop(context);
// Navigator.push(
// context,
// MaterialPageRoute(
// builder: (context) => const ArtistsPage()));
// },
// text_: 'Artists',
// ),
// DraweTile(
// paddingsleft: Kpaddingsleft,
// paddingsVertical: KpaddingsVertical,
// fontsizer: Kfontsizer,
// icon_: Icons.bolt_outlined,
// iconColor: Theme.of(context).colorScheme.secondary,
// textColor: ktextColor,
// onTap_: () {
// Navigator.pop(context);
// Navigator.push(
// context,
// MaterialPageRoute(
// builder: (context) => const ForecastScreen()));
// },
// text_: 'Forecast',
// ),
//
// DraweTile(
// paddingsleft: Kpaddingsleft,
// paddingsVertical: KpaddingsVertical,
// fontsizer: Kfontsizer,
// icon_: Icons.settings,
// iconColor: Theme.of(context).colorScheme.secondary,
// textColor: ktextColor,
// onTap_: () {
// Navigator.pop(context);
// Navigator.push(
// context,
// MaterialPageRoute(
// builder: (context) => const SettingsPage()));
// },
// text_: 'Settings',
// ),
//
// DraweTile(
// paddingsleft: Kpaddingsleft,
// paddingsVertical: KpaddingsVertical,
// fontsizer: Kfontsizer,
// icon_: Icons.info,
// iconColor: Theme.of(context).colorScheme.secondary,
// textColor: ktextColor,
// onTap_: () {
// Navigator.pop(context);
// Navigator.push(
// context,
// MaterialPageRoute(
// builder: (context) => const InfoScreen()));
// },
// text_: 'About',
// ),
