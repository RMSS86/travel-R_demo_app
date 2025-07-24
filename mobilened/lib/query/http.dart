import 'dart:convert' as convert;
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'package:http/http.dart' as http;
import '../models/types/TourTypes.dart';
import '../models/types/UserTypes.dart';

//< GET TOURS // NO TOKEN
Future<List<TourType>> getTours({String? targetURL_}) async
{
    var url = Uri.parse(targetURL_!);
    final response = await http.get(
        url,
        headers: {"Content-Type": "application/json"},
    );
    var jsonResponse =
        convert.jsonDecode(response.body) as Map<String, dynamic>;

    final List _data = jsonResponse['data']['data']; //< API SPECIFIC
    // final Tours = _data.map((e) => TourType.fromJson(e)).toList();
    // print('TOP TOURS: \n  ${Tours}');
    return _data.map((e) => TourType.fromJson(e)).toList();
}

//> PENDING: GET TOURS // W/TOKEN
Future<void> fetchDataHeaders({String? targetURL_, String? jwt_}) async
{
    final response = await http.get(
        Uri.parse(targetURL_!),
        headers:
        {
            'Authorization': 'Bearer $jwt_',
            'Accept': 'application/json'
        }
    );
    if (response.statusCode == 200)
    {
        print('Data fetched: ${response.body}');
    }
    else
    {
        print('Error: ${response.statusCode}');
    }
}

//>
// final request = new Request('GET', Uri.parse('https://example.com/'))..followRedirects = false;
// final response = await client.send(request);

//<

//> LOG ING
Future<String> logIn({
    String? targetURL_,
    required LogIn credentials_}) async
{
    print(targetURL_);
    final response = await http.post(
        Uri.parse(targetURL_!),
        headers: <String, String>
        {
             'Content-Type': 'application/json; charset=UTF-8',
            //'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: jsonEncode(<String, String>{
                'email': credentials_.email_,
                'password': credentials_.password_,
            },
        ),
    );


    if (response.statusCode == 200)
    {
        print('Data fetched: ${response.body}');
        print('STATUS CODE: ${response.statusCode}');
        var jsonResponse =
        convert.jsonDecode(response.body) as Map<String, dynamic>;
        // final user_ = jsonResponse['data']['data'];
        //
        // return UserType.fromJson(user_);
        print(jsonResponse);
    }
    else
    {

        //UtilAction.showSnackBar(context, " Details Submitted Successfully");

        print('error fetched: ${response.body}');
        print('ERROR CODE: ${response.statusCode}');

    }


    // return jsonResponse;
    return response.body;
}
// final client = HttpClient();
// var uri = Uri.parse("http://localhost/");
// var request = await client.getUrl(uri)..followRedirects = false;

//> SIGN IN
Future<Map<String, dynamic>> signIn({
    String? targetURL_,
    required NewUser credentials_}) async
{
    final response = await http.post(
        Uri.parse(targetURL_!),
        headers: <String, String>
        {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: jsonEncode(<String, String>
            {
                'name':credentials_.name_,
                'email':credentials_.email_ ,
                'password':credentials_.password_,
                'passwordConfirm':credentials_.passwordConfirm_
            }
        )
    );
    if (response.statusCode == 200) {
        print('Data fetched: ${response.body}');
    }
    else {
        print('Error: ${response.statusCode}');

    }
    var jsonResponse =
        convert.jsonDecode(response.body) as Map<String, dynamic>;
    // final user_ = jsonResponse['data']['data'];
    //
    // return UserType.fromJson(user_);
    return jsonResponse;
}

///////////////////////////////////////////////////////////////////////////////

Future<http.StreamedResponse> logInn({
    String? targetURL_,
    required LogIn credentials_}) async
{
    http.Request req = http.Request("Post", Uri.parse(targetURL_!))
        ..followRedirects = false;
    http.Client baseClient = http.Client();
    http.StreamedResponse response = await baseClient.send(req);
    print('FORM THE REQUESTER $response');
    Uri redirectUri = Uri.parse(response.headers['statusCode']!);

    return response;
}
///////////////////////////////////////////////////////////////////////////////
var headers_ = 
{
    'Content-Type': 'application/json'
};

var headersPost = <String, String>
{
    'Content-Type': 'application/json; charset=UTF-8'
};

var request = http.Request('GET', Uri.parse('{{URL}}api/v1/tours/top-5-cheap'));

//https://natours.dev/api/v1/tours/

//<
// void HTTP() async
// {//List<String> arguments
//     // This example uses the Google Books API to search for books about http.
//     // https://developers.google.com/books/docs/overview
//     var url =
//     Uri.https('www.natours.dev', '/api/v1/tours/top-5-cheap');
//
//     // Await the http get response, then decode the json-formatted response.
//     var response = await http.get(url);
//     if (response.statusCode == 200)
//     {
//         var jsonResponse =
//         convert.jsonDecode(response.body) as Map<String, dynamic>;
//
//         var _data = jsonResponse['data']['data'][4];
//         print('Name of the Tour from http: [ $_data ]');
//     }
//     else
//     {
//         print('Request failed with status: ${response.statusCode}.');
//     }
// }
