import { useEffect } from "react";
import MyPets from "./MyPets/MyPets";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import RecentBokings from "./RecentBokings/RecentBokings";
import AOS from "aos";
import "aos/dist/aos.css";

const MyProfile = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);
	return (
		<main className="py-10 md:py-14 lg:py-20 bg-[#F9F8F6]">
			<div className="container">
				<div className="max-w-4xl mx-auto">
					<ProfileInfo />
					<RecentBokings />
					<MyPets />
				</div>
			</div>
		</main>
	);
};

export default MyProfile;
