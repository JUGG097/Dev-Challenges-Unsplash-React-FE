import { toast } from "react-toastify";

export const errorToast = (text: string) =>
	toast(text, {
		position: "top-center",
		type: "error",
		theme: "dark",
	});

export const itemData = [
	{
		_id: "1ws",
		img_url: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		label: "Morbi consequat lectus non orci maximus",
	},
	{
		_id: "1wsi",
		img_url: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
		label: "Snacks",
	},
	{
		_id: "1wsd",
		img_url: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		label: "Mushrooms",
	},
	{
		_id: "1wsf",
		img_url: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
		label: "Tower",
	},
	{
		_id: "1wsl",
		img_url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		label: "Sea star",
	},
	{
		_id: "1wsb",
		img_url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		label: "Honey",
	},
	{
		_id: "2ws",
		img_url: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
		label: "Mountain",
	},
	{
		_id: "2wsq",
		img_url: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		label: "Bike",
	},
];
