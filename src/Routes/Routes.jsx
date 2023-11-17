import { createBrowserRouter } from "react-router-dom";
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
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://travel-web-app-server.vercel.app/places"),
      },
      {
        path: "/destinationDetails",
        element: <DestinationDetails></DestinationDetails>,
        loader: () => fetch("https://travel-web-app-server.vercel.app/places"),
      },
      {
        path: "/placesDetails/:placeId",
        element: <PlacesDetails />,
        loader: ({ params }) =>
          fetch(`https://travel-web-app-server.vercel.app/${params.placeId}`),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://travel-web-app-server.vercel.app/bookings"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
