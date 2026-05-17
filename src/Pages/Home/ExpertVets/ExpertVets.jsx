import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ExpertVetCard from "./ExpertVetCard";

const ExpertVets = () => {
	const [vets, setVets] = useState([]);
	useEffect(() => {
		fetch("/vetsData.json")
			.then((res) => res.json())
			.then((data) => setVets(data));
	}, []);
	return (
		<section className="py-10 md:py-14 lg:py-20 bg-[#F9F8F6]">
			<div className="container">
				<div>
					<SectionTitle
						title="Meet Our Expert Vets"
						tagLine="Experienced professionals dedicated to your pet's winter wellness"
					/>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-8">
					{vets.map((vet) => (
						<ExpertVetCard key={vet.id} vet={vet} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ExpertVets;
