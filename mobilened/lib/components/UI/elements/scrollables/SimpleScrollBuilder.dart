// import 'package:flutter/material.dart';
//
// class SimpleScrollBuilder extends StatefulWidget {
//   const SimpleScrollBuilder({super.key});
//
//   @override
//   State<SimpleScrollBuilder> createState() => _SimpleScrollBuilderState();
// }
//
// class _SimpleScrollBuilderState extends State<SimpleScrollBuilder> {
//   @override
//   Widget build(BuildContext context) {
//     return  Expanded(
//       child: ListView.builder(
//         itemCount: value.getHotPickList().length,
//         scrollDirection: Axis.horizontal,
//         itemBuilder: (context, index) {
//           CandyPost jade_ = value.getHotPickList()[index];
//
//           return JewelTile(
//             onTap_: () => addingToCartPermission(jade_),
//             ///
//             jade_: jade_,
//           );
//         },
//       ),
//     );
//   }
// }
