import 'package:flutter/material.dart';
import 'package:trax/CAT/Media/MediaCAT.dart';
import 'package:trax/components/Layout/PageContent.dart';
import '../../../utility/constants/Konstants.dart';
import '../../UI/elements/headers/ToursPageHeader.dart';
import '../../UI/elements/material/MaterialWrapper.dart';
import '../ElevationPage.dart';
import 'ToursPageToursSection.dart';
////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS///
////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS///

class ToursPage extends StatefulWidget
{
  const ToursPage({super.key});

  @override
  State<ToursPage> createState() => _ToursPageState();
}

class _ToursPageState extends State<ToursPage>
{
  @override
  Widget build(BuildContext context)
  {
    return ElevationPage(
      children_: [

        ToursPageHeader(),
        ToursSections(),
      ],
    );
  }
}