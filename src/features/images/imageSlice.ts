import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageList, ImageData, ImageSliceProps } from "../../utils/types";

// Define the initial state using that type
const initialState: ImageSliceProps = {
	images: [],
	searchTerm: "",
	filterImages: [],
};

export const imageSlice = createSlice({
	name: "image",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		fetchImages: (state, action: PayloadAction<ImageList>) => {
			state.images = action.payload;
			state.filterImages = action.payload;
			return state;
		},
		addImage: (state, action: PayloadAction<ImageData>) => {
			state.images.unshift(action.payload);
			state.filterImages = state.images.filter((item) =>
				item.label
					.toLowerCase()
					.includes(state.searchTerm.toLowerCase())
			);
			return state;
		},
		filterImages: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
			state.filterImages = state.images.filter((item) =>
				item.label.toLowerCase().includes(action.payload.toLowerCase())
			);
			return state;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		deleteImage: (state, action: PayloadAction<string>) => {
			state.images = state.images.filter(
				(item) => item._id !== action.payload
			);
			state.filterImages = state.images.filter((item) =>
				item.label
					.toLowerCase()
					.includes(state.searchTerm.toLowerCase())
			);
			return state;
		},
	},
});

export const { fetchImages, addImage, filterImages, deleteImage } =
	imageSlice.actions;

export default imageSlice.reducer;
