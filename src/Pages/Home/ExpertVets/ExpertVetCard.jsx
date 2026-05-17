const ExpertVetCard = ({ vet }) => {
	const { image, name, specialty } = vet;
	return (
		<div
			data-aos="flip-left"
			className="border bg-[#FFFFFF] shadow-sm text-center hover:shadow-lg transition-shadow p-6"
		>
			{/* Vet Photo */}
			<div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
				<img
					className="w-full h-full object-cover"
					src={image}
					alt={name}
				/>
			</div>
			<div className="text-center">
				<h2 className="text-[18px] font-bold mb-1">{name}</h2>
				<h3 className="text-[#1773CF] font-medium mb-2">{specialty}</h3>
				<div className="flex items-center justify-center gap-2 text-[#627384]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-award h-4 w-4"
					>
						<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
						<circle cx="12" cy="8" r="6"></circle>
					</svg>
					<span className="text-sm">12 years experience</span>
				</div>
			</div>
		</div>
	);
};

export default ExpertVetCard;
