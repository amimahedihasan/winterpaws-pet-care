import { IoMdStar } from "react-icons/io";
import { GoArrowRight, GoClock } from "react-icons/go";
import { Link } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = ({ service }) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);
	const {
		serviceId,
		image,
		serviceName,
		rating,
		description,
		price,
		slotsAvailable,
	} = service;
	return (
		<div
			data-aos="zoom-in"
			className="group flex flex-col rounded-lg border border-[#E0DAD1] shadow-sm group hover:shadow-lg transition-all duration-300 overflow-hidden"
		>
			{/* Image */}
			<div className="overflow-hidden">
				<img
					className="h-[250px] w-full object-cover transition-all duration-300 group-hover:scale-110"
					src={image}
					alt=""
				/>
			</div>
			{/* Description */}
			<div className="p-[15px] lg:p-6 !pb-0 flex-grow">
				{/* Title & Rating */}
				<div className="flex items-center justify-between mb-2">
					<h2 className="text-[#132639] text-[18px] font-bold">
						{serviceName}
					</h2>
					<p className="flex items-center gap-1">
						<IoMdStar className="text-[22px] text-[#FACC15]" />
						<span className="text-[#132639] font-semibold">
							{rating}
						</span>
					</p>
				</div>
				{/* Short Description */}
				<div>
					<p className="text-[#627384] mb-4">
						{description.length > 100
							? `${description.slice(0, 100)}....`
							: description}
					</p>
				</div>
			</div>
			{/* Details Button */}
			<div className="p-[15px] lg:p-6 !pt-0">
				<div className="flex items-center justify-between pb-3">
					<p className="text-[#1773CF] text-[20px] font-bold">
						${price}
					</p>
					<p className="text-[#627384] flex items-center gap-1">
						<GoClock className="text-[20px]" />
						<span>{slotsAvailable} slots</span>
					</p>
				</div>
				<Link to={`/service-details/${serviceId}`}>
					<button className="view-details">
						View Details <GoArrowRight className="text-[22px]" />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Service;
