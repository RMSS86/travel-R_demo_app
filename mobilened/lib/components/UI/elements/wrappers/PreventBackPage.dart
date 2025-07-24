import 'package:flutter/material.dart';

class PreventBackScope extends StatelessWidget
{
    final Widget child_;
    const PreventBackScope({super.key, required this.child_});

    @override
    Widget build(BuildContext context)
    {
        return PopScope(canPop: false,
            child: child_
        );
    }
}
