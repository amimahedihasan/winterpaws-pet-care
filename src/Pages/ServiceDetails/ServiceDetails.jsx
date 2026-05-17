import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaRegEnvelope } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
	const data = useLoaderData();
	const { id } = useParams();

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	const targetService = data.find((item) => item.serviceId === Number(id));
	const {
		image,
		serviceName,
		rating,
		providerName,
		description,
		price,
		slotsAvailable,
		providerEmail,
		category,
	} = targetService;

	const handleBookNow = (e) => {
		e.preventDefault();
		e.target.reset();
		toast.success("Booking Complete!");
	};

	return (
		<main className="pt-10 pb-14 md:pt-14 md:pb-20 lg:pt-20 lg:pb-40 bg-[#F9F8F6]">
			<section>
				<div className="container">
					<div className="page-wrpper grid lg:grid-cols-2 gap-5 md:gap-10 lg:gap-8 relative overflow-hidden">
						{/* Service Details Card */}
						<div data-aos="fade-right">
							<div className="mb-6">
								<img
									className="h-[200px] md:h-[400px] w-full object-cover rounded-lg"
									src={image}
									alt=""
								/>
							</div>
							<div className="border p-6">
								<div>
									<div className="flex items-center justify-between">
										<h2 className="text-[#132639] text-[20px] md:text-[25px] font-semibold">
											{serviceName}
										</h2>
										<p className="flex items-center gap-1">
											<IoMdStar className="text-[22px] text-[#FACC15]" />
											<span className="text-[#132639] text-[18px] font-semibold">
												{rating}
											</span>
										</p>
									</div>
									<p className="text-[#627384]">
										{providerName}{" "}
										<span className="inline-block text-[14px] py-1 px-4 bg-blue-200 border-blue-500 rounded-full text-[#132639]">
											{category}
										</span>
									</p>
								</div>
								<div className="mt-6 flex flex-col gap-6">
									<div>
										<h3 className="font-semibold text-lg mb-2">
											Description
										</h3>
										<p className="text-[#627384]">
											{description}
										</p>
									</div>
									<div className="grid md:grid-cols-2 gap-4">
										<div className="flex items-center gap-2">
											<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E7F0FA]">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#1773CF"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="lucide lucide-calendar h-5 w-5 text-primary"
												>
													<path d="M8 2v4"></path>
													<path d="M16 2v4"></path>
													<rect
														width="18"
														height="18"
														x="3"
														y="4"
														rx="2"
													></rect>
													<path d="M3 10h18"></path>
												</svg>
											</div>
											<div>
												<p className="text-sm text-[#627384]">
													Price
												</p>
												<p className="font-bold text-xl text-[#1773CF]">
													${price}
												</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#EBF6F2]">
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
													className="lucide lucide-clock h-5 w-5 text-accent"
												>
													<circle
														cx="12"
														cy="12"
														r="10"
													></circle>
													<polyline points="12 6 12 12 16 14"></polyline>
												</svg>
											</div>
											<div>
												<p className="text-sm text-[#627384]">
													Available Slots
												</p>
												<p className="font-bold text-xl text-[#132639]">
													{slotsAvailable}
												</p>
											</div>
										</div>
									</div>
									<div className="flex items-center gap-2 p-4 bg-[#EEEBE8] rounded-lg">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#1773CF"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-mail h-5 w-5 text-primary"
										>
											<rect
												width="20"
												height="16"
												x="2"
												y="4"
												rx="2"
											></rect>
											<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
										</svg>
										<div>
											<p className="text-sm text-[#627384]">
												Contact Provider
											</p>
											<p className="font-medium">
												{providerEmail}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Booking Form */}
						<div data-aos="fade-left">
							<div className="p-6 border shadow-sm bg-[#FFFFFF]">
								<div>
									<h3 className="font-semibold text-2xl">
										Book This Service
									</h3>
									<p className="text-[#627384]">
										Fill out the form below to reserve your
										slot
									</p>
								</div>
								<div className="mt-6">
									<form onSubmit={handleBookNow}>
										<fieldset className="fieldset space-y-4">
											{/* Name Input */}
											<div className="space-y-2">
												<label className="label text-[#132639] font-medium">
													<FiUser className="text-[18px]" />
													Your Name
												</label>
												<input
													type="text"
													className="input focus:outline-none w-full bg-[#F9F8F6]"
													placeholder="Your Name"
													name="name"
													required
												/>
											</div>
											{/* Email Input */}
											<div className="space-y-2">
												<label className="label text-[#132639] font-medium">
													<FaRegEnvelope className="text-[17px]" />
													Email Address
												</label>
												<input
													type="email"
													className="input focus:outline-none w-full bg-[#F9F8F6]"
													placeholder="example@gmail.com"
													name="email"
													required
												/>
											</div>
											{/* Product & Price */}
											<div className="p-4 bg-[#EEEBE8] rounded-lg space-y-2">
												<h4 className="font-semibold text-[18px]">
													Booking Summary
												</h4>
												<div className="flex flex-col md:flex-row justify-between text-[16px] md:text-[17px]">
													<span className="text-[#627384]">
														Service:
													</span>
													<span className="font-medium">
														{serviceName}
													</span>
												</div>
												<div className="flex flex-col md:flex-row justify-between text-[16px] md:text-[17px]">
													<span className="text-[#627384]">
														Provider:
													</span>
													<span className="font-medium">
														{providerName}
													</span>
												</div>
												<div className="flex justify-between text-[17px] pt-2 border !border-r-0 !border-b-0 !border-l-0 border-t">
													<span className="text-[#627384]">
														Total Price:
													</span>
													<span className="font-bold text-lg text-[#1773CF]">
														${price}
													</span>
												</div>
											</div>
											<button className="btn bg-[#1773CF] text-white py-2 rounded-md whitespace-nowrap font-medium text-[18px] h-12">
												Book Now
											</button>
										</fieldset>
									</form>
									<p className="text-xs text-center text-[#627384] mt-6">
										By booking, you agree to our terms and
										conditions
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ServiceDetails;
