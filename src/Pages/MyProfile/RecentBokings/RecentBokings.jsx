import BokingCard from "./BokingCard";

const RecentBokings = () => {
	return (
		<div
			data-aos="fade-up"
			className="border shadow-sm bg-[#FFFFFF] p-4 md:p-8 mb-8"
		>
			<h3 className="text-2xl font-semibold">Recent Bookings</h3>
			<div className="flex flex-col gap-5 mt-5">
				<BokingCard
					title="Winter Coat Fitting for Dogs"
					date="Feb 15, 2025"
				/>
				<BokingCard
					title="Winter Grooming & Paw Treatment"
					date="Feb 10, 2025"
				/>
				<BokingCard title="Winter Wellness Check" date="Feb 05, 2025" />
			</div>
		</div>
	);
};

export default RecentBokings;
