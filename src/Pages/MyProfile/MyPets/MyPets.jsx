import MyPetCard from "./MyPetCard";

const MyPets = () => {
	return (
		<div
			data-aos="fade-up"
			className="border shadow-sm bg-[#FFFFFF] p-4 md:p-8 mb-8"
		>
			<h3 className="text-2xl font-semibold">My Pets</h3>
			<div className="grid md:grid-cols-2 gap-4 mt-5">
				<MyPetCard
					image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&amp;q=80"
					name="Max"
					category="Golden Retriever"
					years="3 years old"
				/>
				<MyPetCard
					image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&q=80"
					name="Luna"
					category="Persian Cat"
					years="2 years old"
				/>
			</div>
		</div>
	);
};

export default MyPets;
