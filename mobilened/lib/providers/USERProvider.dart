import '../models/types/UserTypes.dart';
import '../utility/imports.dart';
import '../query/http.dart';


class UserProvider extends ChangeNotifier {
  // static late Future<UserType> signedUser ;
  // static late Future<UserType> loggedUser ;

  static late Future<Map<String, dynamic>> signedUser ;
  static late Future<Map<String, dynamic>> loggedUser ;

  //static Future<Map<String, dynamic>> loggingUser({
  // static Future<Map<String, dynamic>> loggingUser({
  //   String? targetURL_,
  //   required LogIn credentials_}) async{
  //   loggedUser =  logIn(targetURL_: 'https://www.natours.dev/api/v1/users/login',  credentials_: credentials_);
  //   print('FROM PROVIDER: $loggedUser');
  //   //notifyListeners();
  //    return loggedUser;
  // }

  // static Future<Map<String, dynamic>> signingUser({
  //   String? targetURL_,
  //   required NewUser credentials_}) async{
  //   signedUser = signIn(targetURL_: 'https://www.natours.dev/api/v1/users/signup',  credentials_: credentials_);
  //   print('FROM PROVIDER: $signedUser');
  //   //notifyListeners();
  //   return signedUser;
  // }

}