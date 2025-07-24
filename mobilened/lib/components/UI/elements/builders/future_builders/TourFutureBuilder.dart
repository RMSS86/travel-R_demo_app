import 'package:flutter/material.dart';
import '../../../../../models/types/TourTypes.dart';
import '../../../../../providers/TOURProvider.dart';
import '../../cards/OneSideProductCardNet.dart';

class TourFutureBuilder extends StatelessWidget {

  final Future<List<TourType>>? tourData_;
  final double listHeight_;

  const TourFutureBuilder({
    super.key,
    this.listHeight_=369,
    required this.tourData_,

  });

  @override
  Widget build(BuildContext context) {
    return //< MAKE HORIZONTAL LISTVIEW
      FutureBuilder<List<TourType>>(
        future: tourData_,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            // until data is fetched, show loader
            return const CircularProgressIndicator();
          } else if (snapshot.hasData) {
            // once data is fetched, display it on screen (call buildPosts())
            final posts = snapshot.data!;
            return buildPosts(posts);
          } else {

            Text("No data available");

            // if no data, show simple Text
            return Padding(
              padding: const EdgeInsets.all(45.0),
              child: Column(
                children: [
                  const CircularProgressIndicator(),
                  Text("Sorry, No data available"),
                ],
              ),
            );
          }
        },
      );
  }
  //> MAKE COMPONENT
// function to display fetched data on screen
  Widget buildPosts(List<TourType> posts) {
    // ListView Builder to show data in a list
    return SizedBox(
      height: listHeight_,
      width: double.maxFinite,
      child: ListView.builder(
        padding: EdgeInsets.zero,
        itemCount: posts.length,
        //scrollDirection: Axis.horizontal,
        itemBuilder: (context, index) {
          final post = posts[index];
          return OneSidedProductCardNet(
            tour_: post,
          );
        },
      ),
    );
  }
  //>
}


