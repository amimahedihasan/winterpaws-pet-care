import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
	const { resetPassword, email, setEmail } = use(AuthContext);
	const navigate = useNavigate();

	// Reset Password
	const handleResetPassword = (e) => {
		e.preventDefault();
		const email = e.target.email.value;

		resetPassword(email)
			.then(() => {
				e.target.reset();
				toast.warn("Password reset email sent!");
				navigate("/login");
				// Redirect to Gmail Inbox After wait 1.5 seconds
				setTimeout(() => {
					const mailTab = window.open(
						"https://mail.google.com/mail/u/0/#inbox",
						"_blank"
					);
					if (mailTab) {
						mailTab.focus();
					} else {
						toast.info(
							"Please allow pop-ups for this site to open Gmail."
						);
					}
				}, 1500);
			})
			.catch((error) => {
				const message = error.message;
				const modifiedMessage = message
					.split("/")[1]
					.replaceAll("-", " ")
					.replace(")", "");
				toast.error(modifiedMessage);
			});
	};
	return (
		<section className="pb-10 md:pb-20">
			<div className="container">
				<div className="card bg-base-100 mx-auto mt-14 md:mt-24 w-full max-w-lg shrink-0 shadow-2xl">
					<h1 className="text-3xl font-bold text-center pt-10">
						Forgot Password!
					</h1>
					<div className="card-body">
						<form onSubmit={handleResetPassword}>
							<fieldset className="fieldset">
								<label className="label">Email</label>
								<input
									type="email"
									className="input w-full focus:outline-none"
									placeholder="example@gmail.com"
									name="email"
									defaultValue={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<button className="btn btn-neutral mt-4">
									Reset Password
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ForgotPassword;
