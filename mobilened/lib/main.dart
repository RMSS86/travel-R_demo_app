import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:trax/components/Layout/screens/SplashScreen.dart';
import 'package:trax/providers/TOURProvider.dart';
import 'package:trax/providers/USERProvider.dart';
////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////
////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////

////APP-INITIALIZATION////APP-INITIALIZATION////APP-INITIALIZATION////
void main() async ///-////APP-INITIALIZATION////APP-INITIALIZATION////
////APP-INITIALIZATION////APP-INITIALIZATION////APP-INITIALIZATION////
{
    WidgetsFlutterBinding.ensureInitialized();//< INIT ALL BINDINGS
    await Hive.initFlutter();//< LOCAL DATABASE
    //> PREVENTS LANDSCAPE ORIENTATION
    SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]).then((_)
        {
            runApp(MultiProvider( //< PROVIDERS [ SETS GLOBAL PROVIDERS ]
                    providers: [
                        ChangeNotifierProvider(create: (context) => UserProvider()),
                        ChangeNotifierProvider(create: (context) => TourProvider()),

                        //       ChangeNotifierProvider(create: (context) => THEMESelection()),
                        //       ChangeNotifierProvider(create: (context) => ThemeProvider()),
                        //       ChangeNotifierProvider(create: (context) => ARProvider()),
                        //       ChangeNotifierProvider(create: (context) => CATProvider()),

                    ],
                    child: const Trax(), //< APP INITIALIZATION
                ),
            ); // runApp
        }
    ); // SystemChrome
}

class Trax extends StatefulWidget {
    const Trax({super.key});

    @override
    State<Trax> createState() => _TraxState();
}
class _TraxState extends State<Trax> {
    @override
    Widget build(BuildContext context) {

        return MaterialApp(//< MAKE GENERIC WITH THEME AND CART PROVIDERS
            debugShowCheckedModeBanner: false,
            home: const SplashPage(),
            theme: ThemeData(
                colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
                useMaterial3: true
            )
        );
    }
}
