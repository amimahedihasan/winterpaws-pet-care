const MyPetCard = ({ image, name, category, years }) => {
	return (
		<div
			data-aos="fade-up"
			className="flex items-center gap-4 p-4 rounded-lg bg-[#F6F5F3]"
		>
			<img
				src={image}
				alt="Dog"
				className="w-16 h-16 rounded-full object-cover"
			/>
			<div>
				<h4 className="font-semibold">{name}</h4>
				<p className="text-sm text-[#627384]">{category}</p>
				<p className="text-xs text-[#627384]">{years}</p>
			</div>
		</div>
	);
};

export default MyPetCard;
