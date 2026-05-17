import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
	const [sliderItems, setSliderItems] = useState([]);
	useEffect(() => {
		fetch("/heroData.json")
			.then((res) => res.json())
			.then((data) => setSliderItems(data));
	}, []);

	return (
		<>
			<Swiper
				className="mySwiper"
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				speed={1000}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
			>
				{sliderItems.map((sliderItem) => (
					<SwiperSlide key={sliderItem.id}>
						<div
							className={`bg-center md:min-h-auto bg-cover`}
							style={{
								backgroundImage: `url(${sliderItem.image})`,
							}}
						>
							<div className="bg-[rgba(0,0,0,0.4)] h-[100%] py-28 md:py-[150px] lg:py-[220px]">
								<div className="container">
									<h2 className="text-white text-[35px] md:text-[60px] font-bold max-w-[600px] leading-[100%]">
										{sliderItem.title}
									</h2>
									<p className="text-white text-[20px] py-4 md:py-8">
										{sliderItem.subTitle}
									</p>
									<button className="bg-[#E16C44] flex items-center gap-2 rounded-lg py-4 px-10 text-white text-[16px]">
										Explore More
										<GoArrowRight className="text-[22px]" />
									</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Banner;
