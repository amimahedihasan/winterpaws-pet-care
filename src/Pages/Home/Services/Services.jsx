import { useEffect, useState } from "react";
import Service from "./Service";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("/servicesData.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	const homePageServices = services.slice(0, 6);
	return (
		<section className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<div>
					<SectionTitle
						title="Popular Winter Care Services"
						tagLine="Discover our most loved services designed to keep your pets
						happy and healthy during the cold season"
					/>
				</div>
				<div className="grid gap-4 md:gap-5 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
					{homePageServices.map((service) => (
						<Service key={service.serviceId} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
