import 'package:flutter/material.dart';
import '../../../../../../CAT/Media/MediaCAT.dart';

class PopNavigator extends StatefulWidget {
  final String imgSrc_;
  final double height_;
  final double padding_;

  const PopNavigator({
    super.key,
    this.imgSrc_=MediaCAT.userIcon,
  this.height_=60,
  this.padding_=25.0,
  });

  @override
  State<PopNavigator> createState() => _PopNavigatorState();
}

class _PopNavigatorState extends State<PopNavigator> {
  @override
  Widget build(BuildContext context) {
    return  ClipRRect(
      borderRadius: BorderRadius.circular(widget.padding_),
      child: Image.asset(
          widget.imgSrc_,
          height: widget.height_),
    );
  }
}

//
// FadeInImage.memoryNetwork(
// placeholder: kTransparentImage,
// image: imageURL,
// fit: BoxFit.cover,//prefer cover over fill
// ),
