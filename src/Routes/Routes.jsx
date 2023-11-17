import {
    createBrowserRouter,
  } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import DestinationDetails from "../Pages/DestinationDetails/DestinationDetails";
import PlacesDetails from "../Pages/DestinationDetails/PlacesDetails";
import Booking from "../Pages/Booking/Booking/Booking";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoutes";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/places')
        },
        {
          path: '/destinationDetails',
          element: <DestinationDetails></DestinationDetails>,
          loader: ()=> fetch('http://localhost:5000/places')
        },
        {
          path: '/placesDetails/:placeId',
          element: <PlacesDetails />,
          loader: ({ params }) => fetch(`http://localhost:5000/places/${params.placeId}`)
        },
        {
          path: '/booking',
          element: <PrivateRoute><Booking></Booking></PrivateRoute>,
          loader: ()=> fetch('http://localhost:5000/bookings')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
        
      ]
    },
  ]);

