import moment from "moment";
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { RxInstagramLogo } from "react-icons/rx";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="py-12 border-t border-t-[#E0DAD1]">
			<div className="container">
				{/* Footer Top */}
				<div className="grid gap-8 grid-cols-1 md:grid-cols-12 ">
					<div className="md:col-span-8 lg:col-span-4">
						<h2 className="text-[#132639] text-[18px] font-bold">
							WinterPaws
						</h2>
						<p className="mt-4 text-[#627384] lg:pr-20">
							Your trusted companion for winter pet care. Keeping
							your furry friends warm, safe, and happy all season
							long.
						</p>
					</div>
					<div className="md:col-span-4 lg:col-span-2">
						<h2 className="text-[#132639] font-semibold">
							Quick Links
						</h2>
						<ul className="mt-4 flex flex-col gap-2">
							<li>
								<Link
									to="/"
									className="text-[#132639] text-[14px]"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/services"
									className="text-[#132639] text-[14px]"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									to="/profile"
									className="text-[#132639] text-[14px]"
								>
									My Profile
								</Link>
							</li>
						</ul>
					</div>
					<div className="md:col-span-8 lg:col-span-3">
						<h2 className="text-[#132639] font-semibold">
							Contact Us
						</h2>
						<ul className="mt-4 flex flex-col gap-3">
							<li className="flex items-center gap-2.5">
								<span className="w-4">
									<IoCallOutline className="text-[#1773CF] text-[20px]" />
								</span>
								<span className="text-[#132639] text-[14px]">
									+8801701-XXXXXX
								</span>
							</li>
							<li className="flex items-center gap-2.5">
								<span className="w-4">
									<FaRegEnvelope className="text-[#1773CF]" />
								</span>
								<span className="text-[#132639] text-[14px]">
									info@winterpaws.com
								</span>
							</li>
							<li className="flex items-center gap-2.5">
								<span className="w-4">
									<IoLocationOutline className="text-[#1773CF] text-[20px]" />
								</span>
								<span className="text-[#132639] text-[14px]">
									123 Pet Street, Cozy City
								</span>
							</li>
						</ul>
					</div>
					<div className="md:col-span-4 lg:col-span-3">
						<h2 className="text-[#132639] font-semibold">
							Follow Us
						</h2>
						<ul className="mt-4 flex items-center gap-2.5">
							<li className="follow-us group">
								<SlSocialFacebook className="group-hover:text-white text-[18px] transition-colors duration-300" />
							</li>
							<li className="follow-us group">
								<SlSocialTwitter className="group-hover:text-white text-[18px] transition-colors duration-300" />
							</li>
							<li className="follow-us group">
								<RxInstagramLogo className="group-hover:text-white text-[18px] transition-colors duration-300" />
							</li>
						</ul>
					</div>
				</div>
				{/* Footer Bottom */}
				<div className="flex flex-col md:flex-row gap-y-4 items-center justify-between border-t border-t-[#E0DAD1] mt-10 pt-10">
					<p className="text-[#627384]">
						© {moment().format("YYYY")} WinterPaws. All rights
						reserved.
					</p>
					<ul className="flex items-center gap-5">
						<li className="text-[14px] text-[#627384] transition-colors duration-200 hover:text-[#1787DD]">
							<Link to="/privacy-policy">Privacy Policy</Link>
						</li>
						<li className="text-[14px] text-[#627384] transition-colors duration-200 hover:text-[#1787DD]">
							<Link to="/terms-conditions">Terms of Service</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
