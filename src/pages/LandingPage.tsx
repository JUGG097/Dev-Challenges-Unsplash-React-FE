import React from "react";
import Header from "../components/Header";
import ImageMasonry from "../components/ImageMasonry";

const LandingPage: React.FC = () => {
	const itemData = [
		{
			img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
			label: "Morbi consequat lectus non orci maximus",
		},
		{
			img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
			label: "Snacks",
		},
		{
			img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
			label: "Mushrooms",
		},
		{
			img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
			label: "Tower",
		},
		{
			img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
			label: "Sea star",
		},
		{
			img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
			label: "Honey",
		},
		{
			img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
			label: "Mountain",
		},
		{
			img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
			label: "Bike",
		},
	];

	return (
		<>
			<div className="container">
				<Header />
				<ImageMasonry images={itemData} />
			</div>
		</>
	);
};

export default LandingPage;
