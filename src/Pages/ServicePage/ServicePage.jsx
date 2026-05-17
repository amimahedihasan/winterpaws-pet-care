import { useLoaderData } from "react-router";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Service from "../Home/Services/Service";

const ServicePage = () => {
	const data = useLoaderData();
	return (
		<main className="pt-10 pb-14 md:pt-14 md:pb-20 lg:pt-20 lg:pb-40 bg-[#F9F8F6]">
			<section>
				<div className="container">
					<SectionTitle
						title="Our Winter Care Services"
						tagLine="Explore our comprehensive range of winter pet care services designed to keep your furry friends happy and healthy"
					/>
				</div>
				<div className="container">
					<div className="grid gap-4 md:gap-5 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
						{data.map((item) => (
							<Service key={item.serviceId} service={item} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default ServicePage;
