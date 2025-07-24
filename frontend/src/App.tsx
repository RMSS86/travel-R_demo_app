//////APP//////APP//////APP//////APP//////APP//////APP//////APP/////
//////APP//////APP//////APP//////APP//////APP//////APP//////APP/////
export default function App() {
  /////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS//////
  /////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS//////
  const { globalUser, setGlobalUser } = useUserContext();
  useEffect(() => {
    useLocalUser({
      _user: globalUser,
      _userDispatcher: setGlobalUser,
      _action: "verify",
    });
  }, []);

  //////RETURN////RETURN////RETURN////RETURN////RETURN////RETURN////RETURN
  //////RETURN////RETURN////RETURN////RETURN////RETURN////RETURN////RETURN
  return (
    <>
      <MainQueryClientProvider>
        <RouterProvider router={GlobalRouter} />
      </MainQueryClientProvider>
    </>
  );
}
/////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////
/////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////////
import {
  RouterProvider,
  //@ts-ignore
} from "react-router-dom";
import { GlobalRouter } from "./routes/Router.tsx";
import { MainQueryClientProvider } from "./query/QueryProvider.tsx";
import { useEffect } from "react";
import { useUserContext } from "./store/UserContext.tsx";
import { useLocalUser } from "./models/hooks/useLocalUser.tsx";
