import 'package:flutter/material.dart';
import 'package:trax/CAT/Media/MediaCAT.dart';
import 'package:trax/components/Layout/PageContent.dart';
import 'package:trax/components/pages/home/sections/TopToursSections.dart';
import '../../../utility/constants/Konstants.dart';
import '../../UI/elements/material/MaterialWrapper.dart';
import '../ElevationPage.dart';
import 'components/HomePageHeader.dart';

class HomePage extends StatefulWidget
{
    const HomePage({super.key});

    @override
    State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
{
    @override
    Widget build(BuildContext context)
    {
      return ElevationPage(
        children_: [

          HomePageHeader(),//< HEADER
          TopToursSections(),//< TOP TOURS SECTIONS

        ],
      );
    }
}


