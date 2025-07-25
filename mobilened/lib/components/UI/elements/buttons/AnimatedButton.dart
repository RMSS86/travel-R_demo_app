// import 'package:flutter/cupertino.dart';
// import 'package:flutter/material.dart';
// import 'package:rive/rive.dart';
//
// class AnimatedBtn extends StatelessWidget {
//   const AnimatedBtn({
//     super.key,
//     required RiveAnimationController btnAnimationController,
//     required this.press,
//     required this.riveSrc_
//   }) : _btnAnimationController = btnAnimationController;
//
//   final RiveAnimationController _btnAnimationController;
//   final VoidCallback press;
//   final String riveSrc_;
//
//   @override
//   Widget build(BuildContext context) {
//     return GestureDetector(
//       onTap: press,
//       child: SizedBox(
//         height: 64,
//         width: 236,
//         child: Stack(
//           children: [
//             RiveAnimation.asset(
//               riveSrc_,
//               controllers: [_btnAnimationController],
//             ),
//             Positioned.fill(
//               top: 8,
//               child: Row(
//                 mainAxisAlignment: MainAxisAlignment.center,
//                 crossAxisAlignment: CrossAxisAlignment.center,
//                 children: [
//                   const Icon(CupertinoIcons.arrow_right),
//                   const SizedBox(width: 8),
//                   Text(
//                     "Start the course",
//                     style: Theme.of(context).textTheme.labelLarge,
//                   )
//                 ],
//               ),
//             )
//           ],
//         ),
//       ),
//     );
//   }
// }