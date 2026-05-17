import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const EditProfile = () => {
	const { user, handleUpdateProfile } = use(AuthContext);
	const navigate = useNavigate();
	const handleEditProfile = (e) => {
		e.preventDefault();
		let newName = e.target.name.value;
		let newPhotoURL = e.target.photo.value;

		if (!newName) {
			newName = user.displayName;
		}

		if (!newPhotoURL) {
			newPhotoURL = user.photoURL;
		}

		handleUpdateProfile(user, {
			displayName: newName,
			photoURL: newPhotoURL,
		})
			.then(() => {
				e.target.reset();
				toast.success("Your Profile Updated.");
				// window.location.href = "/profile";
				navigate("/profile");
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
						Update Profile!
					</h1>
					<div className="card-body">
						<form onSubmit={handleEditProfile}>
							<fieldset className="fieldset">
								<label className="label">Email</label>
								<input
									type="text"
									className="input w-full focus:outline-none"
									value={user.email}
									disabled
								/>
								<label className="label">Name</label>
								<input
									type="text"
									className="input w-full focus:outline-none"
									placeholder="Your Name"
									name="name"
								/>
								<label className="label">Photo URL</label>
								<input
									type="text"
									className="input w-full focus:outline-none"
									placeholder="Photo URL"
									name="photo"
								/>
								<button className="btn btn-neutral mt-4">
									Update
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EditProfile;
