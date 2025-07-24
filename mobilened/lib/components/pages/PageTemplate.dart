import 'package:flutter/material.dart';
import 'package:trax/CAT/Media/MediaCAT.dart';

import '../../utility/constants/Konstants.dart';
import '../UI/elements/material/MaterialWrapper.dart';

class PageTemplate extends StatefulWidget {
  const PageTemplate({super.key});

  @override
  State<PageTemplate> createState() => _PageTemplateState();
}

class _PageTemplateState extends State<PageTemplate> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:  MaterialWrapper(
        elevation_: 9,
        radius_: UIKonst.kBlocksBorderRadius,
        wrapped_: Stack(
          children: [
            Container(
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(UIKonst.kBlocksBorderRadius),
                  image: DecorationImage(
                    image: AssetImage(MediaCAT.BrandImage2),
                    fit: BoxFit.cover,
                  )),
            ),

          ],
        ),
      ),
    );
  }
}

