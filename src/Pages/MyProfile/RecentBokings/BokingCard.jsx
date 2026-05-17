const BokingCard = ({ title, date }) => {
	return (
		<div
			data-aos="fade-up"
			className="flex items-center justify-between p-4 rounded-lg bg-[#EEEAE8]"
		>
			<div>
				<h4 className="font-semibold mb-1">{title}</h4>
				<p className="text-[#627384]">{date}</p>
			</div>
			<div className="inline-flex items-center rounded-full border !border-[#39AC86] px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-accent/10 text-[#39AC86]">
				Completed
			</div>
		</div>
	);
};

export default BokingCard;
