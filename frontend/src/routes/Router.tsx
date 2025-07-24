//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////
//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////GlobalRouter
export const GlobalRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage />, loader: topToursLoader },
      {
        path: "tours",
        children: [
          {
            index: true,
            element: <ToursPage />,
            loader: tourLoader,
          },
          { path: ":id", element: <TourPage />, loader: singleTourLoader },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup", ///<
        element: <SignupPage />,
      },
      {
        path: "profile",
        element: <UserAccountPage />,
      },
      {
        path: "password-reset",
        element: <PasswordResetPage />,
      },
      {
        path: "admin",
        element: <RootLayout />,
        children: [
          ///page, may change the name to user...
        ],
      },
    ],
  },
]);
//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////
//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////
function PrivateRoute() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

function AnonymousRoute() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? <Navigate to="/" replace /> : <Outlet />;
}

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
import {
  //createRoutesFromElements,
  //Route,
  createBrowserRouter,
  //@ts-ignore
} from "react-router-dom";
import RootLayout from "../components/Layout/LayOut";
import ErrorPage from "../components/pages/error/ErrorPage";
import HomePage, { topToursLoader } from "../components/pages/home/Home";
import ToursPage, {
  loader as tourLoader,
} from "../components/pages/Tours/Tours";
import TourPage, { singleTourLoader } from "../components/pages/Tour/Tour";
import { Navigate, Outlet } from "react-router";
import LoginPage from "../components/pages/login/LoginPage";
import SignupPage from "../components/pages/signin/SignupPage";
import UserAccountPage from "../components/pages/user/UserPage";
import PasswordResetPage from "../components/pages/password/PasswordResetPage";

// <BrowserRouter>
//   <MenuBar />
//   <Routes>
//     <Route element={<PrivateRoute />}>
//       <Route path='/' element={<Dashboard />} />
//       <Route path='/profile' element={<Profile />} />
//     </Route>
//     <Route element={<AnonymousRoute />}>
//       <Route path='/register' element={<RegisterUser />} />
//       <Route path='/login' element={<LoginUser />} />
//       <Route path='/forgotpassword' element={<ForgotPassword />} />
//     </Route>
//   </Routes>
// </BrowserRouter>

// function PrivateRoute () {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return user ? <Outlet /> : <Navigate to="/login" replace />;
//   }

//   function AnonymousRoute () {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return user ? <Navigate to="/" replace /> : <Outlet />;
//   }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////
//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
//       <Route index="" element={<HomePage />} loader={topToursLoader} />
//       <Route path="tours" element={<ToursPage />} loader={tourLoader}>
//         <Route path=":id" element={<TourPage />} loader={singleTourLoader} />
//       </Route>
//     </Route>
//   </Route>
// );

// export const GlobalRouter = createBrowserRouter(routeDefinitions);
