import 'package:flutter/material.dart';

class DividerTagged extends StatelessWidget {
  final String tag_;
  const DividerTagged({super.key, required this.tag_});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Divider(),
        ),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 16),
          child: Text(
            tag_,
            style: TextStyle(
              color: Colors.black26,
              fontWeight: FontWeight.w500,
            ),
          ),
        ),
        Expanded(child: Divider()),
      ],
    );
  }
}

