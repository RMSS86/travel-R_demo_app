// //Theme.of(context).colorScheme.surfaceDim
// // Provider.of<ThemeProvider>(context).isDarkMode == true ?
// // Colors.white70 : null,
//
// // Route _animatedRoute(Widget child)
// // {
// //   return PageRouteBuilder(
// //       pageBuilder: (context, animation, secundaryAnimation) => child,
// //       transitionsBuilder: (context, animation, secundaryAnimation, child)
// //       {
// //         const begin = Offset(1.0, 0.1);
// //         const end = Offset.zero;
// //         const curve = Curves.decelerate;
// //         var tween =
// //         Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
// //
// //         return SlideTransition(
// //             position: animation.drive(tween),
// //             child: child
// //         );
// //       }
// //   );
// // }
//
// import 'package:flutter/material.dart';
//
//
//
// class GetStartedScreen extends StatefulWidget {
//   const GetStartedScreen({super.key, required this.title});
//   final String title;
//
//   @override
//   State<GetStartedScreen> createState() => _GetStartedScreenState();
// }
//
// class _GetStartedScreenState extends State<GetStartedScreen> {
//   late PageController _pageController;
//   double _progress = 0;
//
//   @override
//   void initState() {
//     super.initState();
//     _pageController = PageController()
//       ..addListener(() {
//         setState(() {
//           _progress = _pageController.page ?? 0;
//         });
//       });
//   }
//
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: Stack(
//         children: [
//           Container(
//             decoration: BoxDecoration(
//               color: AppColors.lightBlue,
//             ),
//             child: Padding(
//               padding: const EdgeInsets.fromLTRB(0, 0, 0, 250),
//               child: Center(
//                 child: Image.asset(
//                   "assets/images/bg.png",
//                   width: MediaQuery.of(context).size.width *
//                       0.7, // Adjust the width as needed
//                   height: MediaQuery.of(context).size.height *
//                       0.5, // Adjust the height as needed
//                   fit: BoxFit.contain,
//                 ),
//               ),
//             ),
//           ),
//           Align(
//             alignment: Alignment.bottomCenter,
//             child: Container(
//                 decoration: BoxDecoration(
//                   color: AppColors.white,
//                   borderRadius: BorderRadius.only(
//                     topLeft: Radius.circular(20),
//                     topRight: Radius.circular(20),
//                   ),
//                 ),
//                 height:
//                 MediaQuery.of(context).size.height * 0.35 + _progress * 150,
//                 child: Column(
//                   children: [
//                     Expanded(
//                         child: PageView(
//                           controller: _pageController,
//                           children: [
//                             LandingContent(onGetStarted: () {
//                               _pageController.animateToPage(
//                                 1,
//                                 duration: Duration(milliseconds: 500),
//                                 curve: Curves.ease,
//                               );
//                             }),
//                             Login(),
//                           ],
//                         ))
//                   ],
//                 )),
//           )
//         ],
//       ),
//     );
//   }
// }
//
//
//
// class LandingContent extends StatelessWidget {
//   const LandingContent({Key? key, required this.onGetStarted}) : super(key: key);
//
//   final VoidCallback onGetStarted;
//
//   @override
//   Widget build(BuildContext context) {
//     return Padding(
//       padding: const EdgeInsets.all(30.0),
//       child: Column(
//         mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//         children: [
//           Text(
//             "Lorem ipsum dolor sit amet",
//             style: TextStyle(
//               fontSize: 25,
//               fontWeight: FontWeight.bold,
//             ),
//             textAlign: TextAlign.center,
//           ),
//           Text(
//             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//             style: TextStyle(
//               fontSize: 14,
//             ),
//             textAlign: TextAlign.center,
//           ),
//           SizedBox(
//             height: 50,
//             width: MediaQuery.of(context).size.width * 0.9,
//             child: ElevatedButton(
//               style: ElevatedButton.styleFrom(
//                 backgroundColor: AppColors.yellow,
//                 shape: RoundedRectangleBorder(
//                   borderRadius: BorderRadius.circular(30),
//                 ),
//               ),
//               onPressed: onGetStarted,
//               child: Row(
//                 mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                 children: [
//                   Text(
//                     "Get Started",
//                     style: TextStyle(
//                       fontSize: 16,
//                       color: AppColors.black,
//                       fontWeight: FontWeight.bold,
//                     ),
//                   ),
//                   const Icon(Icons.arrow_right, color: AppColors.black),
//                 ],
//               ),
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }
//
//
//
// class Login extends StatelessWidget {
//   const Login({super.key});
//
//   @override
//   Widget build(BuildContext context) {
//     return Padding(
//       padding: const EdgeInsets.all(30.0),
//       child: Column(
//         mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//         children: [
//           Text(
//             "Lorem ipsum dolor sit amet",
//             style: TextStyle(
//               fontSize: 25,
//               fontWeight: FontWeight.bold,
//             ),
//             textAlign: TextAlign.center,
//           ),
//           Text(
//             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//             style: TextStyle(
//               fontSize: 14,
//             ),
//             textAlign: TextAlign.center,
//           ),
//           SizedBox(
//             height: 50,
//             width: MediaQuery.of(context).size.width * 0.9,
//             child: ElevatedButton(
//               style: ElevatedButton.styleFrom(
//                 backgroundColor: AppColors.blue,
//                 shape: RoundedRectangleBorder(
//                   borderRadius: BorderRadius.circular(30),
//                 ),
//               ),
//               onPressed: () {},
//               child: Row(
//                 mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                 children: [
//                   const Align(
//                     alignment: Alignment.centerLeft,
//                     child: Icon(
//                       Icons.apple,
//                       color: AppColors.black,
//                       size: 30, // Increased size
//                     ),
//                   ),
//                   const Spacer(),
//                   Text(
//                     "Continue with Apple",
//                     style: TextStyle(
//                       fontSize: 16,
//                       color: AppColors.black,
//                       fontWeight: FontWeight.bold,
//                     ),
//                   ),
//                   const Spacer()
//                 ],
//               ),
//             ),
//           ),
//           SizedBox(
//             height: 50,
//             width: MediaQuery.of(context).size.width * 0.9,
//             child: ElevatedButton(
//               style: ElevatedButton.styleFrom(
//                 backgroundColor: AppColors.grey,
//                 shape: RoundedRectangleBorder(
//                   borderRadius: BorderRadius.circular(30),
//                 ),
//               ),
//               onPressed: () {},
//               child: Row(
//                 mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                 children: [
//                   Align(
//                     alignment: Alignment.centerLeft,
//                     child: IconWrap(
//                       path: 'assets/icons/facebook.png',
//                     ),
//                   ),
//                   const Spacer(),
//                   Text(
//                     "Continue with Facebook",
//                     style: TextStyle(
//                       fontSize: 16,
//                       color: AppColors.black,
//                       fontWeight: FontWeight.bold,
//                     ),
//                   ),
//                   const Spacer()
//                 ],
//               ),
//             ),
//           ),
//           SizedBox(
//             height: 50,
//             width: MediaQuery.of(context).size.width * 0.9,
//             child: ElevatedButton(
//               style: ElevatedButton.styleFrom(
//                 backgroundColor: AppColors.yellow,
//                 shape: RoundedRectangleBorder(
//                   borderRadius: BorderRadius.circular(30),
//                 ),
//               ),
//               onPressed: () {
//                 // context.read<AuthBloc>().add(SignIn());
//                 print('pressed form log');
//               },
//               child: Row(
//                 mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                 children: [
//                   Align(
//                     alignment: Alignment.centerLeft,
//                     child: IconWrap(
//                       path: 'assets/icons/google.png',
//                     ),
//                   ),
//                   const Spacer(),
//                   Text(
//                     "Continue with Google",
//                     style: TextStyle(
//                       fontSize: 16,
//                       color: AppColors.black,
//                       fontWeight: FontWeight.bold,
//                     ),
//                   ),
//                   const Spacer()
//                 ],
//               ),
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }
//
//
// class IconWrap extends StatelessWidget {
//   Color? color;
//   double? height;
//   double? width;
//   String path;
//   IconWrap(
//       {super.key, required this.path, this.color, this.height, this.width});
//
//   @override
//   Widget build(BuildContext context) {
//     return Container(
//         height: height ?? 25,
//         width: width ?? 25,
//         alignment: Alignment.center,
//         child: Image.asset(path, height: height ?? 25, width: width ?? 25));
//   }
// }
//
// class AppColors {
//   static const white = Color(0xFFFFFFFF);
//   static const lightBlue = Color(0xFFB9CFE1);
//   static const blue = Color(0xFF75AEE4);
//   static const black = Color(0xFF000000);
//   static const grey = Color.fromARGB(255, 216, 216, 216);
//   static const yellow = Color(0xFFF8E67F);
// }
//
// const gapH2 = SizedBox(height: 2);
// const gapH4 = SizedBox(height: 4);
// const gapH8 = SizedBox(height: 8);
// const gapH16 = SizedBox(height: 16);
// const gapH20 = SizedBox(height: 20);
// const gapH24 = SizedBox(height: 24);
// const gapH36 = SizedBox(height: 36);
// const gapH48 = SizedBox(height: 48);
//
// const gapW4 = SizedBox(width: 4);
// const gapW8 = SizedBox(width: 8);
// const gapW16 = SizedBox(width: 16);
// const gapW20 = SizedBox(width: 20);
// const gapW24 = SizedBox(width: 24);
//
// //
// // @override
// // Widget build(BuildContext context) {
// //   return Align(
// //     alignment: Alignment.centerRight,
// //     child: Padding(
// //       padding: const EdgeInsets.only(top: 12.0),
// //       child: InkWell(
// //         onTap: () {
// //           if (onSeeMoreLessTap != null) {
// //             onSeeMoreLessTap!();
// //           }
// //         },
// //
// //
// //         child: Text.rich(
// //           softWrap: true,
// //           style: const TextStyle(
// //             fontStyle: FontStyle.normal,
// //             fontWeight: FontWeight.w500,
// //             fontSize: 13.0,
// //             color: Colors.blue,
// //           ),
// //
// //           textAlign: TextAlign.start,
// //
// //
// //           TextSpan(
// //             text: "",
// //
// //           ),
// //         ),
// //       ),
// //     ),
// //   );
// // }
// //
// //
// //
// // import 'package:flutter/material.dart';
// // import 'package:google_fonts/google_fonts.dart';
// // import '../../material/MaterialWrapper.dart';
// // //GoogleFonts.bebasNeue
// //
// // class Labeler extends StatelessWidget
// // {
// //
// //   final double padding_;
// //   final double verticalPadding_;
// //   final double horizontalPadding_;
// //   final bool symetricalPadding_;
// //   final bool toUpperCase_;
// //   final String tag_;
// //   final Color tagTextColor_;
// //   final FontWeight tagTextweight_;
// //   final double tagFontSize_;
// //   final Color bgColor_;
// //   final double elevation_;
// //   final bool labelDirCenter_;
// //   final bool labelDirLeft_;
// //   final void Function()? onTap_;
// //
// //   const Labeler({
// //     super.key,
// //     this.padding_ = 25.0,
// //     this.verticalPadding_ = 25.0,
// //     this.horizontalPadding_ = 25.0,
// //     this.symetricalPadding_ = true,
// //     this.tag_ = 'Tag Me!',
// //     this.tagTextColor_ = Colors.white,
// //     this.tagTextweight_ = FontWeight.w300,
// //     this.tagFontSize_ = 15.0,
// //     this.bgColor_ = Colors.transparent,
// //     this.elevation_=9,
// //     this.toUpperCase_= false,
// //     this.labelDirCenter_ = true,
// //     this.labelDirLeft_ = false,
// //     this.onTap_,
// //
// //   });
// //
// //   @override
// //   Widget build(BuildContext context)
// //   {
// //     return GestureDetector(
// //       onTap: onTap_,
// //       child: MaterialWrapper(
// //         bgColor_: bgColor_,
// //         elevation_: elevation_,
// //         wrapped_: Container(
// //           padding: symetricalPadding_ ?
// //           EdgeInsets.all(padding_) :
// //           EdgeInsets.symmetric(vertical: verticalPadding_, horizontal: horizontalPadding_),
// //           decoration: BoxDecoration(
// //               borderRadius: BorderRadius.circular(8.0)
// //
// //           ),
// //           child: Text(
// //             //< IF TRUE CONDITIONAL
// //             textAlign: labelDirCenter_ ?
// //             TextAlign.center :
// //
// //             //< IF FALSE CONDITIONAL
// //             labelDirLeft_ ?
// //             TextAlign.start :
// //             TextAlign.end,
// //
// //             toUpperCase_ ?
// //             tag_.toUpperCase() : tag_,
// //
// //             style: GoogleFonts.quicksand(
// //                 color: tagTextColor_,
// //                 fontSize: tagFontSize_,
// //                 fontWeight: tagTextweight_
// //             ),
// //
// //           ),
// //         ),
// //       ),
// //     );
// //   }
// // }
// //

//
// import 'dart:convert';
// import 'package:http/http.dart' as http;
// import 'package:flutter/material.dart';
// import 'package:json_to_list_flutter/post.dart';
//
// // app starting point
// void main() {
//   runApp(const MyApp());
// }
//
// class MyApp extends StatelessWidget {
//   const MyApp({super.key});
//
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       home: const MyHomePage(),
//       debugShowCheckedModeBanner: false,
//     );
//   }
// }
//
// // homepage class
// class MyHomePage extends StatefulWidget {
//   const MyHomePage({super.key});
//
//   @override
//   State<MyHomePage> createState() => _MyHomePageState();
// }
//
// // homepage state
// class _MyHomePageState extends State<MyHomePage> {
//
//   // variable to call and store future list of posts
//   Future<List<Post>> postsFuture = getPosts();
//
//   // function to fetch data from api and return future list of posts
//   static Future<List<Post>> getPosts() async {
//     var url = Uri.parse("https://jsonplaceholder.typicode.com/albums/1/photos");
//     final response = await http.get(url, headers: {"Content-Type": "application/json"});
//     final List body = json.decode(response.body);
//     return body.map((e) => Post.fromJson(e)).toList();
//   }
//
//   // build function
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: Center(
//         // FutureBuilder
//         child: FutureBuilder<List<Post>>(
//           future: postsFuture,
//           builder: (context, snapshot) {
//             if (snapshot.connectionState == ConnectionState.waiting) {
//               // until data is fetched, show loader
//               return const CircularProgressIndicator();
//             } else if (snapshot.hasData) {
//               // once data is fetched, display it on screen (call buildPosts())
//               final posts = snapshot.data!;
//               return buildPosts(posts);
//             } else {
//               // if no data, show simple Text
//               return const Text("No data available");
//             }
//           },
//         ),
//       ),
//     );
//   }
//
//   // function to display fetched data on screen
//   Widget buildPosts(List<Post> posts) {
//     // ListView Builder to show data in a list
//     return ListView.builder(
//       itemCount: posts.length,
//       itemBuilder: (context, index) {
//         final post = posts[index];
//         return Container(
//           color: Colors.grey.shade300,
//           margin: EdgeInsets.symmetric(vertical: 5, horizontal: 10),
//           padding: EdgeInsets.symmetric(vertical: 5, horizontal: 5),
//           height: 100,
//           width: double.maxFinite,
//           child: Row(
//             children: [
//               Expanded(flex: 1, child: Image.network(post.url!)),
//               SizedBox(width: 10),
//               Expanded(flex: 3, child: Text(post.title!)),
//             ],
//           ),
//         );
//       },
//     );
//   }
// }