import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ImageState {
	id: string;
	img_url: string;
	label: string;
}

// Define the initial state using that type
const initialState: ImageState[] = [];

export const imageSlice = createSlice({
	name: "image",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		fetchImages: (state, action: PayloadAction<ImageState[]>) => {
			state = action.payload;
			return state;
		},
		addImage: (state, action: PayloadAction<ImageState>) => {
			state.unshift(action.payload);
			return state;
		},
		filterImages: (state, action: PayloadAction<string>) => {},
		// Use the PayloadAction type to declare the contents of `action.payload`
		deleteImage: (state, action: PayloadAction<string>) => {},
	},
});

export const { fetchImages, addImage, filterImages, deleteImage } =
	imageSlice.actions;

export default imageSlice.reducer;
