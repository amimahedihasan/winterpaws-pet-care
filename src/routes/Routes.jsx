import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Service from "../Pages/ServicePage/ServicePage";
import MyProfile from "../Pages/MyProfile/MyProfile";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import EditProfile from "../Pages/EditProfile/EditProfile";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ComingSoon from "../components/ComingSoon/ComingSoon";
export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "services",
				Component: Service,
				loader: () => fetch("/servicesData.json"),
			},

			{
				path: "login",
				Component: Login,
			},
			{
				path: "register",
				Component: Register,
			},
			{
				path: "privacy-policy",
				Component: ComingSoon,
			},
			{
				path: "terms-conditions",
				Component: ComingSoon,
			},
			{
				path: "service-details/:id",
				loader: () => fetch("/servicesData.json"),
				element: (
					<PrivateRoute>
						<ServiceDetails />
					</PrivateRoute>
				),
			},
			{
				path: "profile",
				element: (
					<PrivateRoute>
						<MyProfile />
					</PrivateRoute>
				),
			},
			{
				path: "edit-profile",
				element: (
					<PrivateRoute>
						<EditProfile />
					</PrivateRoute>
				),
			},
			{
				path: "reset-password",
				Component: ForgotPassword,
			},
		],
	},
]);
