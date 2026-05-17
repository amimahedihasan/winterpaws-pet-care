import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const Navbar = () => {
	const { user, logOut } = use(AuthContext);

	const handleLogOut = () => {
		logOut();
	};

	const menuItems = (
		<>
			<li>
				<NavLink
					className="hover:bg-transparent focus:!bg-transparent text-[16px]"
					to="/"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className="hover:bg-transparent focus:!bg-transparent text-[16px]"
					to="/services"
				>
					Services
				</NavLink>
			</li>
			<li>
				<NavLink
					className="hover:bg-transparent focus:!bg-transparent text-[16px]"
					to="/profile"
				>
					My Profile
				</NavLink>
			</li>
		</>
	);
	return (
		<header className="sticky top-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-b-[#E0DAD1] py-5">
			<div className="container">
				<div className="navbar min-h-0 p-0">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="lg:hidden cursor-pointer mr-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								{menuItems}
							</ul>
						</div>
						<Link to="/">
							<div className="flex items-center gap-2 group">
								<div className="relative">
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
										className="lucide lucide-snowflake h-8 w-8 text-[#2472C6] transition-transform group-hover:rotate-12"
									>
										<line
											x1="2"
											x2="22"
											y1="12"
											y2="12"
										></line>
										<line
											x1="12"
											x2="12"
											y1="2"
											y2="22"
										></line>
										<path d="m20 16-4-4 4-4"></path>
										<path d="m4 8 4 4-4 4"></path>
										<path d="m16 4-4 4-4-4"></path>
										<path d="m8 20 4-4 4 4"></path>
									</svg>
									<div className="absolute inset-0 bg-[#2472C6]/20 blur-xl group-hover:bg-[#2472C6]/30 transition-colors"></div>
								</div>
								<span className="text-xl font-bold bg-gradient-to-r from-[#2472C6] to-[#E66D48] bg-clip-text text-transparent">
									WinterPaws
								</span>
							</div>
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0">
							{menuItems}
						</ul>
					</div>
					<div className="navbar-end">
						{user ? (
							<>
								<div className="flex items-center">
									<div className="dropdown dropdown-end !w-[45px] !h-[45px] rounded-full">
										<div
											tabIndex={0}
											role="button"
											className="rounded-full cursor-pointer !w-[45px] !h-[45px]"
										>
											<div className="!w-[45px] rounded-full">
												<img
													className="!w-[45px] rounded-full"
													src={user.photoURL}
													alt="Profile"
												/>
											</div>
										</div>
										<ul
											tabIndex="-1"
											className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow"
										>
											<li>
												<span className="text-[16px]">
													{user.displayName}
												</span>
											</li>
											<li>
												<span className="text-[16px]">
													{user.email}
												</span>
											</li>
											<li className="sm:hidden">
												<span
													onClick={handleLogOut}
													className="text-[16px]"
												>
													Logout
												</span>
											</li>
										</ul>
									</div>
									<button
										onClick={handleLogOut}
										className="btn btn-primary ml-2.5 hidden sm:block"
									>
										Log Out
									</button>
								</div>
							</>
						) : (
							<>
								<Link to="/login" className="btn btn-primary">
									Login
								</Link>
								{/* <Link
									to="/register"
									className="btn btn-primary ml-3.5"
								>
									Register
								</Link> */}
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
