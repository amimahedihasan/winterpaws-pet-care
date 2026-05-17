import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CareTipsCard from "./CareTipsCard";

const CareTips = () => {
	const [careTips, setCareTips] = useState([]);
	useEffect(() => {
		fetch("/careTips.json")
			.then((res) => res.json())
			.then((data) => setCareTips(data));
	}, []);
	return (
		<section className="py-10 md:py-14 lg:py-20 bg-[#F3F2EE]">
			<div className="container">
				<div>
					<SectionTitle
						title="Winter Care Tips for Pets"
						tagLine="Essential advice to keep your furry friends safe and comfortable during winter"
					/>
				</div>
				<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
					{careTips.map((singleTips) => (
						<CareTipsCard
							key={singleTips.id}
							singleTips={singleTips}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CareTips;
