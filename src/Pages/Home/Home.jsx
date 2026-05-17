import Banner from "./Banner/Banner";
import CallToAction from "./CallToAction/CallToAction";
import CareTips from "./CareTips/CareTips";
import ExpertVets from "./ExpertVets/ExpertVets";
import Services from "./Services/Services";

const Home = () => {
	return (
		<div>
			<Banner />
			<Services />
			<CareTips />
			<ExpertVets />
			<CallToAction />
		</div>
	);
};

export default Home;
