import 'package:flutter/material.dart';

class Router_ extends StatelessWidget {
  final Widget child_;
  const Router_({super.key, required this.child_});

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
  static Route _animatedRoute(Widget child_)
  {
    return PageRouteBuilder(
        pageBuilder: (context, animation, secundaryAnimation) => child_,
        transitionsBuilder: (context, animation, secundaryAnimation, child_)
        {
          const begin = Offset(1.0, 0.1);
          const end = Offset.zero;
          const curve = Curves.decelerate;

          var tween =
          Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
          return SlideTransition(
              position: animation.drive(tween),
              child: child_
          );
        }
    );
  }
}

Route _createRoute(Widget child_) {
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => child_,
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(0.0, 1.0);
      const end = Offset.zero;
      const curve = Curves.ease;

      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

      return SlideTransition(position: animation.drive(tween), child: child);
    },
  );
}



//
// class Router_ extends Route
// {
//     static Route _animatedRoute(Widget child)
//     {
//         return PageRouteBuilder(
//             pageBuilder: (context, animation, secundaryAnimation) => child,
//             transitionsBuilder: (context, animation, secundaryAnimation, child)
//             {
//                 const begin = Offset(1.0, 0.1);
//                 const end = Offset.zero;
//                 const curve = Curves.decelerate;
//
//                 var tween =
//                     Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
//                 return SlideTransition(
//                     position: animation.drive(tween),
//                     child: child
//                 );
//             }
//         );
//     }
//
// }

