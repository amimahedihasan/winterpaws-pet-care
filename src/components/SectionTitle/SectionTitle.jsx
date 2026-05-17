const SectionTitle = ({ title, tagLine }) => {
	return (
		<div data-aos="fade-up" className="mb-5 md:mb-8 lg:mb-12">
			<h2 className="text-[28px] md:text-[36px] font-bold text-center mb-2 md:mb-4">
				{title}
			</h2>
			<p className="max-w-[600px] mx-auto text-center text-[#627384]">
				{tagLine}
			</p>
		</div>
	);
};

export default SectionTitle;
