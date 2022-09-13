import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../features/images/imageSlice";

export const store = configureStore({
	reducer: {
		images: imageReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
