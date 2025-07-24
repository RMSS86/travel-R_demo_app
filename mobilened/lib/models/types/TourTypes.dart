
class TourType
{
    String? id_;
    String? name;
    double? duration;
    double? maxGroupSize;
    String? difficulty;

    double? ratingsAverage;
    double? ratingsQuantity;
    int? price; //> CHANGE TO DOUBLE ON OUR BACKEND
    double? priceDiscount;

    String? summary;
    String? description;
    String? imageCover;
    List<String>? images;
    String? startDates;
    bool? trending;
    Location? startLocation;

    TourType({
        this.id_,
        this.name,
        this.duration,
        this.maxGroupSize,
        this.difficulty,
        this.ratingsAverage,
        this.ratingsQuantity,
        this.price,
        this.priceDiscount,
        this.summary,
        this.description,
        this.imageCover,
        this.images,
        this.startDates,
        this.trending,
        this.startLocation
    });

    TourType.fromJson(Map<String, dynamic> json)
    {
        id_ = json['id'];
        name = json['name'];
        duration = json['duration'];
        maxGroupSize = json['maxGroupSize'];
        difficulty = json['difficulty'];
        ratingsAverage = json['ratingsAverage'];
        ratingsQuantity = json['ratingsQuantity'];
        price = json['price'];
        priceDiscount = json['priceDiscount'];
        summary = json['summary'];
        description = json['description'];
        imageCover = json['imageCover'];
        images = json['images'];
        startDates = json['startDates'];//< map
        trending = json['trending'];
        startLocation = json['startLocation'];
    }

}

class Location
{
    final List<double>? coordinates;
    final String? address;
    final String? description;

    Location({
        this.coordinates,
        this.address,
        this.description

    });

}

// class Post {
//   int? albumId;
//   int? id;
//   String? title;
//   String? url;
//   String? thumbnailUrl;
//
//   Post({this.albumId, this.id, this.title, this.url, this.thumbnailUrl});
//
//   Post.fromJson(Map<String, dynamic> json) {
//     albumId = json['albumId'];
//     id = json['id'];
//     title = json['title'];
//     url = json['url'];
//     thumbnailUrl = json['thumbnailUrl'];
//   }
// }

// difficulty: "easy" | "medium" | "difficult" | "Expert";

// coordinates: number[];
// address: string;
// description: number;
// }
// interface _locations {
// coordinates: number[];
// address: string;
// description: string;
// day: number;
// }

// startLocation: _location;
// locations: _locations[];
// guides?: string;
// };

// static Future<List<Post>> getPosts() async {
// var url = Uri.parse("https://jsonplaceholder.typicode.com/albums/1/photos");
// final response = await http.get(url, headers: {"Content-Type": "application/json"});
// final List body = json.decode(response.body);
// return body.map((e) => Post.fromJson(e)).toList();

