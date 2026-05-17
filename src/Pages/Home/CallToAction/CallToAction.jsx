const CallToAction = () => {
	return (
		<section className="pt-10 pb-14 md:pt-14 md:pb-20 lg:pt-20 lg:pb-40 bg-[#F3F2EE]">
			<div className="container">
				<div className="max-w-[1365px] mx-auto border bg-[linear-gradient(135deg,rgba(51,153,255,1)_0%,rgba(255,128,102,1)_100%)] py-12 px-5 md:px-12 text-center text-white">
					<div>
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
							className="lucide lucide-heart h-16 w-16 mx-auto mb-6"
						>
							<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
						</svg>
					</div>
					<h2 className="text-4xl font-bold mb-4">
						Give Your Pet the Best Winter Care
					</h2>
					<p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
						Book a service today and ensure your furry friend stays
						happy, healthy, and warm all season long
					</p>
					<div className="flex gap-4 justify-center flex-wrap">
						<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-11 transition-all duration-300 bg-[#F16E42] hover:bg-[rgba(241,110,66,0.8)] rounded-md px-8">
							Browse Services
						</button>
						<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-11 rounded-md px-8 border border-white text-white transition-all duration-300 hover:bg-white hover:text-[#2E80D3]">
							Contact Us
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
