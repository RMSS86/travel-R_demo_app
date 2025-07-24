import 'package:flutter/material.dart';

Route _animatedRoute(Widget child)
{
    return PageRouteBuilder(
        pageBuilder: (context, animation, secundaryAnimation) => child,
        transitionsBuilder: (context, animation, secundaryAnimation, child)
        {
            const begin = Offset(1.0, 0.1);
            const end = Offset.zero;
            const curve = Curves.decelerate;
            var tween =
                Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
            
            return SlideTransition(
                position: animation.drive(tween),
                child: child
            );
        }
    );
}

