import '../models/types/TourTypes.dart';
import '../query/http.dart';
import '../utility/imports.dart';

class TourProvider extends ChangeNotifier {

  //< API SELECTIONS TOURS>
  static Future<List<TourType>> allToursFuture = getTours(targetURL_: 'https://www.natours.dev/api/v1/tours/top-5-cheap');
  static Future<List<TourType>> topToursFuture = getTours(targetURL_: 'https://www.natours.dev/api/v1/tours/top-5-cheap');

//> MAKE METHOD FOR GETTING SINGUALR TOUR DATA
// FIRST POS > send tour singular tour data through button action to tour page
// SECOND POS > send tour singular tour #id through button action to tour page for fetching
}