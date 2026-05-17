import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const Root = () => {
	return (
		<div>
			<ScrollTop />
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
