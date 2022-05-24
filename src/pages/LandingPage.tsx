import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ImageMasonry from "../components/ImageMasonry";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchImages } from "../features/images/imageSlice";

const LandingPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const images = useAppSelector((state) => state.images);

	// const [fetchLoading, setFetchLoading] = useState(false);

	useEffect(() => {
		const itemData = [
			{
				id: "1ws",
				img_url:
					"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
				label: "Morbi consequat lectus non orci maximus",
			},
			{
				id: "1wsi",
				img_url:
					"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
				label: "Snacks",
			},
			{
				id: "1wsd",
				img_url:
					"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
				label: "Mushrooms",
			},
			{
				id: "1wsf",
				img_url:
					"https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
				label: "Tower",
			},
			{
				id: "1wsl",
				img_url:
					"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
				label: "Sea star",
			},
			{
				id: "1wsb",
				img_url:
					"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
				label: "Honey",
			},
			{
				id: "2ws",
				img_url:
					"https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
				label: "Mountain",
			},
			{
				id: "2wsq",
				img_url:
					"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
				label: "Bike",
			},
		];
		// Axios request goes here, delete static data above
		dispatch(fetchImages(itemData));
	}, [dispatch]);

	return (
		<>
			<div className="container">
				<Header />
				<ImageMasonry images={images} />
			</div>
		</>
	);
};

export default LandingPage;
