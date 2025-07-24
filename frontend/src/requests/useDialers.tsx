//<     ENUMERATE THOSE PLACES YOU'VE USED fETCHDATA FUNCTION
///<    CLASIFY THE TYPES OF REQUEST BEING MADE
////<   DEFINE
import { useQuery } from "@tanstack/react-query";
export async function Dailer({
  e,
  _dialer,
  _fetchMode = "QUERY",
  _queryKey,
  _endPoint,
  _mode,
  _method,
  _signal,
  _success,
  _successMSG,
  _logAction,
  _requestBody,
  _staleTime = 5000,
  _gcTime = 1000,
  _forForm = false,
  _logable = false,
}: _dialerProps) {
  ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
  ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
  //< Logger Function
  const logger = ({ _module, _value }: { _module: string; _value: any }) => {
    console.log("FROM " + _module + ": ", _value);
  };

  //<
  ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
  ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
  if (_forForm) e?.preventDefault(); //< PREVENTING DEFAULT

  //< QUERY MODE
  let _fetchRequest:
    | ReactElement<unknown, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | any;

  //<
  async function _sendfetch() {
    //< request signal here!
    _fetchRequest = await _dialer;
    //  FetchData({
    //   _endPoint: _endPoint!,
    //   //< signal: _signal,
    //   _method: _method,
    //   _body: _requestBody,
    //   // _parse: true,
    // });
    if (_logable) {
      logger({ _module: `FETCH:: [${_method}]`, _value: _fetchRequest });
    }
    return _fetchRequest;
  }

  const { data, isPending, isError, error } = useQuery({
    queryKey: [_queryKey],
    queryFn: _sendfetch,
    // staleTime: _staleTime, //<
    // gcTime: _gcTime, //<
  });

  if (isPending) {
    showAlert("loading", "LOADING...", 1000);
  }
  if (isError) {
    //<  error.info?.message || "Failed to fetch events."}
  }

  //<
  if (data) {
    {
      if (_logable) logger({ _module: "FETCH: ", _value: data });
    }
  }
  return data;
}

/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES////
/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES////
type _dialerProps = {
  e?: { preventDefault: () => void };
  _queryKey?: string;
  _signal?: RequestInit;
  _forForm?: boolean;
  _logable?: boolean;
  _endPoint?: string;
  _success?: string;
  _successMSG?: string;
  _requestBody?: string;
  _mode?: _modes;
  _staleTime?: number;
  _gcTime?: number;
  _logAction?: _logActions;
  _fetchMode?: "QUERY" | "SIMPLE";
  _method: "GET" | "POST" | "PATCH";
  _dialer: ReactNode | Promise<ReactNode>;
  _setStater?: React.Dispatch<React.SetStateAction<unknown>>;
};
type _modes =
  | "LOGIN"
  | "LOGOUT"
  | "UPDATE-ME"
  | "UPDATE-PWD"
  | "RESET-PWD"
  | "FORGOT-PWD";
type _logActions = "login" | "logout" | "just-redirect" | "skip";
// //////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////
// //////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import FetchData from "./http.js"; //@ts-ignore
import { showAlert } from "../utility/imports.js";
// import { logActions } from "../models/functions/userLogActions.js";

//<  LOGOUT
//<  LOGIN
//<  HOME PAGE
//<  TOURS
//<  TOUR
//<  USER PAGE

//if (_fetchMode === "SIMPLE") {
//   let _response: unknown; //< response

//   if (_method === "GET") {
//     //< GET WITHOUT BODY / DEFAULT GET
//     _response = await FetchData({ _endPoint: _endPoint!, _parse: true });
//     {
//       if (_logable)
//         logger({ _module: `FETCH: [${_method}]`, _value: _response });
//     }
//     setData(_response);
//     console.log("From after Use State", _data);
//   }

//   //< GET WITH BODY & METHOD
//   _response = await FetchData({
//     _endPoint: _endPoint!,
//     //< signal: _signal,
//     _method: _method,
//     _body: _requestBody,
//     _parse: true,
//   });
//   {
//     if (_logable)
//       logger({ _module: `FETCH [${_method}]`, _value: _response });
//   }

//   setData(_response);
// }

// import { useQuery } from "@tanstack/react-query";
// export async function useDailer({
//   e,
//   _fetchMode = "QUERY",
//   _queryKey,
//   _endPoint,
//   _mode,
//   _method,
//   _signal,
//   _success,
//   _successMSG,
//   _logAction,
//   _requestBody,
//   _staleTime = 5000,
//   _gcTime = 1000,
//   _forForm = false,
//   _logable = false,
// }: _dialerProps) {
//   ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
//   ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
//   //< Logger Function
//   const logger = ({ _module, _value }: { _module: string; _value: any }) => {
//     console.log("FROM " + _module + ": ", _value);
//   };

//   //< ReactNode | Promise<ReactNode>

//   ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
//   ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
//   console.log("from use Dialer", _method);
//   const [_data, setData] = useState(null);
//   if (_forForm) e?.preventDefault(); //< PREVENTING DEFAULT

//   ////////////////////< SIMPLE MODE
//   //
//   //< QUERY MODE
//   let _fetchRequest:
//     | ReactElement<unknown, string | JSXElementConstructor<any>>
//     | Iterable<ReactNode>
//     | any;

//   //< NO BODY GET
//   if (_method === "GET") {
//     async function sendfetch() {
//       //< request signal here!
//       _fetchRequest = await FetchData({
//         _endPoint: _endPoint!,
//         // _parse: true,
//         //< signal: _signal,
//       });
//       {
//         if (_logable)
//           logger({ _module: `FETCH:: [${_method}]`, _value: _fetchRequest });
//       }
//       return _fetchRequest;
//     }
//   }

//   //< BODY POST &
//   async function _sendfetch() {
//     _fetchRequest = await FetchData({
//       _endPoint: _endPoint!,
//       //< signal: _signal,
//       _method: _method,
//       _body: _requestBody,
//       // _parse: true,
//     });
//     if (_logable) {
//       logger({ _module: `FETCH:: [${_method}]`, _value: _fetchRequest });
//     }
//     return _fetchRequest;
//   }

//   const { data, isPending, isError, error } = useQuery({
//     queryKey: [_queryKey],
//     queryFn: _sendfetch,
//     staleTime: _staleTime, //<
//     gcTime: _gcTime, //<
//   });

//   if (isPending) {
//     showAlert("loading", "LOADING...", 1000);
//   }
//   if (isError) {
//     //<  error.info?.message || "Failed to fetch events."}
//   }

//   //< IF DATA RESPONSE
//   if (data) {
//     ///< DONT FORGET TO ACTIVATE PARSE MODE ON HTTP!
//     //setData(() => data); //< DONT FORGET TO ACTIVATE PARSE!
//     ///< DONT FORGET TO ACTIVATE PARSE MODE ON HTTP!
//     {
//       if (_logable) logger({ _module: "FETCH: ", _value: data });
//     }
//   }
//   return data;
// }

// useEffect(() => {
//   //////////////////////////
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["top-five-tours"],
//     queryFn: ({ signal }) =>
//       FetchData({ _signal: signal, _endPoint: "tours/top-5-cheap" }),
//     //enabled: searchTerm !== undefined,
//   });
//   if (isLoading) {
//     showAlert("loading", "LOADING...", 1000);
//   }
//   if (data) console.log("FROM REACT_QUERY FETCH: ", data);
//   /////////////////////////
// }, []);
