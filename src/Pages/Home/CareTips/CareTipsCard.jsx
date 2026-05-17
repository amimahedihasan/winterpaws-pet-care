const CareTipsCard = ({ singleTips }) => {
	const { image, title, description } = singleTips;
	return (
		<div
			data-aos="flip-left"
			className="border bg-[#FFFFFF] shadow-sm text-center hover:shadow-lg transition-shadow p-6"
		>
			<h2 className="text-5xl mb-4">{image}</h2>
			<h3 className="text-[#132639] text-[18px] font-bold mb-2">
				{title}
			</h3>
			<p className="text-[#627384] text-[15px] text-center">
				{description}
			</p>
		</div>
	);
};

export default CareTipsCard;
