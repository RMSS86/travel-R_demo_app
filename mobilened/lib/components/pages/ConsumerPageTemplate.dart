// import 'package:flutter/material.dart';
// import 'package:provider/provider.dart';
//
// import '../UI/elements/material/MaterialWrapper.dart';
//
//
// class ConsumerPageTemplate extends StatefulWidget {
//   const ConsumerPageTemplate({super.key});
//
//   @override
//   State<ConsumerPageTemplate> createState() => _ConsumerPageTemplateState();
// }
//
// class _ConsumerPageTemplateState extends State<ConsumerPageTemplate> {
//   // void addJadeToCart(CandyPost jade) {
//   //   Provider.of<CollectionsCart>(context, listen: false).addItemToCart(jade);
//   //   calcTotal(jade);
//   // }
//
//   // void calcTotal(CandyPost jade) {
//   //   Provider.of<CollectionsCart>(context, listen: false)
//   //       .cartTotalBeforeTax(jade);
//   // }
//
//   // void addingToCartPermission(CandyPost jade) {
//   //   //adv the user about the change
//   //   showDialog(
//   //     context: context,
//   //     builder: (context) => AlertDialog(
//   //       backgroundColor: Theme.of(context).colorScheme.inverseSurface,
//   //       title: const Text(
//   //         'Nice Selection!',
//   //         style: TextStyle(color: Colors.white),
//   //       ),
//   //       content: const Text('Adding this to Cart?',
//   //           style: TextStyle(color: Colors.white)),
//   //       icon: const Icon(
//   //         Icons.add_box,
//   //         size: 48,
//   //         color: Colors.white,
//   //       ),
//   //       actions: [
//   //         ElevatedButton(
//   //           onPressed: () => Navigator.pop(context),
//   //           child: Text(
//   //             'Cancel',
//   //             style: TextStyle(
//   //                 color: Theme.of(context).colorScheme.inversePrimary),
//   //           ),
//   //         ),
//   //         ElevatedButton(
//   //           onPressed: () {
//   //             Navigator.pop(context);
//   //             addJadeToCart(jade);
//   //             goToCart();
//   //           },
//   //           child: Text(
//   //             'Yes, Add To Cart',
//   //             style: TextStyle(color: Theme.of(context).colorScheme.surfaceDim),
//   //           ),
//   //         ),
//   //       ],
//   //     ),
//   //   );
//   // }
//
// //   void goToCart() {
// // //adv the user about the change
// //     showDialog(
// //       context: context,
// //       builder: (context) => AlertDialog(
// //         backgroundColor: Theme.of(context).colorScheme.inverseSurface,
// //         title: const Text(
// //           'Go To Cart?',
// //           style: TextStyle(color: Colors.white),
// //         ),
// //         content: const Text(
// //           'Would you Like to review your Cart?',
// //           style: TextStyle(color: Colors.white),
// //         ),
// //         icon: const Icon(
// //           Icons.shopping_cart,
// //           size: 48,
// //         ),
// //         actions: [
// //           ElevatedButton(
// //             onPressed: () => Navigator.pop(context),
// //             child: Text(
// //               'Cancel',
// //               style: TextStyle(color: Theme.of(context).colorScheme.tertiary),
// //             ),
// //           ),
// //           ElevatedButton(
// //             onPressed: () {
// //               Navigator.pop(context);
// //               Navigator.push(context,
// //                   MaterialPageRoute(builder: (context) => const CartScreen()));
// //             },
// //             child: Text(
// //               'Yes, Go To Cart?',
// //               style: TextStyle(color: Theme.of(context).colorScheme.surfaceDim),
// //             ),
// //           ),
// //         ],
// //       ),
// //     );
// //   }
//
//   @override
//   Widget build(BuildContext context) {
//     return Consumer<CollectionsCart>(
//         builder: (context, value, child) => MaterialWrapper(
//           elevation_: 9,
//           radius_: kMinimalBorderRadius,
//           wrapped_: Container(
//             decoration: BoxDecoration(
//               // color: Theme.of(context).colorScheme.secondary,
//               image: DecorationImage(
//                 image: AssetImage(
//                   dynamicThemeMosaic(
//                       context), //MOSAIC BACKGROUND DYNAMIC SELECTION ON THEME
//                 ),
//                 fit: BoxFit.fill,
//               ),
//             ),
//             child: Column(
//               children: [
//
//                 const Padding(
//                   padding: EdgeInsets.symmetric(vertical: 50.0),
//                 ),
//
//                 ///search bar
//                 Container(
//                   padding: const EdgeInsets.all(12),
//                   margin: const EdgeInsets.symmetric(horizontal: 25),
//                   decoration: BoxDecoration(
//                     color: Colors.grey[100],
//                     borderRadius: BorderRadius.circular(8),
//                   ),
//                   child: const Row(
//                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                     children: [
//                       Text(
//                         'Search',
//                         style: TextStyle(color: Colors.grey),
//                       ),
//                       Icon(
//                         Icons.search,
//                         color: Colors.grey,
//                       ),
//                     ],
//                   ),
//                 ),
//
//                 ///message
//                 Padding(
//                   padding: const EdgeInsets.symmetric(vertical: 15),
//                   child: Text(
//                     'Wear the Vibe that Can Be Noticed',
//                     style: TextStyle(
//                       color: Theme.of(context).colorScheme.inversePrimary,
//                       fontSize: 15,
//                     ),
//                   ),
//                 ),
//                 // const SizedBox(height: 9),
//
//                 /// ///Hot Pick!
//                 Padding(
//                   padding: const EdgeInsets.all(20.0),
//                   child: Row(
//                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                     crossAxisAlignment: CrossAxisAlignment.end,
//                     children: [
//                       const Text(
//                         'Hot Picks',
//                         style: TextStyle(
//                             fontWeight: FontWeight.bold, fontSize: 24),
//                       ),
//                       Hero(
//                         tag: 'logo_swap',
//                         child: Image.asset(
//                           MediaCAT.SBJLogo,
//                           height: 42,
//                         ),
//                       ),
//                       Text(
//                         'see all',
//                         style: TextStyle(
//                           fontWeight: FontWeight.bold,
//                           color:
//                           Theme.of(context).colorScheme.inversePrimary,
//                           fontSize: 14,
//                         ),
//                       ),
//                     ],
//                   ),
//                 ),
//
//                 const SizedBox(height: 1),
//
//                 Expanded(
//                   child: ListView.builder(
//                     itemCount: value.getHotPickList().length,
//                     scrollDirection: Axis.horizontal,
//                     itemBuilder: (context, index) {
//                       CandyPost jade_ = value.getHotPickList()[index];
//
//                       return JewelTile(
//                         onTap_: () => addingToCartPermission(jade_),
//
//                         ///
//                         jade_: jade_,
//                       );
//                     },
//                   ),
//                 ),
//
//                 const Padding(
//                   padding:
//                   EdgeInsets.only(top: 3.0, left: 25.0, right: 25.0),
//                   child: Divider(
//                     color: Colors.transparent,
//                   ),
//                 )
//               ], //////LIST OF ELEMENTS INSIDE LANDING PAGE!
//             ),
//           ),
//         ));
//   }
// }
