import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Header from "../components/Header";
import ImageMasonry from "../components/ImageMasonry";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchImages, filterImages } from "../features/images/imageSlice";
import imagesUrl from "../utils/urls";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { errorToast } from "../utils/helper";
import "react-toastify/dist/ReactToastify.css";
import StyledModal from "../styles/Modal.styled";

const LandingPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const images = useAppSelector((state) => state.images.filterImages);

	const [fetchLoading, setFetchLoading] = useState(false);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value);
		const searchTerm = e.currentTarget.value;
		dispatch(filterImages(searchTerm));
	};

	useEffect(() => {
		// Axios request goes here, delete static data above
		const url = imagesUrl();
		setFetchLoading(true);
		axios
			.get(url)
			.then((res) => {
				dispatch(fetchImages(res.data.data));
				setFetchLoading(false);
			})
			.catch((err) => {
				errorToast("Could not fetch photos");
				dispatch(fetchImages([]));
				setFetchLoading(false);
			});
	}, [dispatch]);

	return (
		<>
			<div className="container">
				<Header handleChange={handleSearchChange} />

				{/* Attempt to render ImageMasonry after loading is complete */}
				{!fetchLoading && <ImageMasonry images={images} />}

				<Dialog
					open={fetchLoading}
					// To disable keyboard automatically closing the modal
					// onClose={handleClose}
					maxWidth="sm"
					fullWidth={true}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<StyledModal>
						<div className="row mt-2">
							<div className="col-12 modal-title-2">
								<h2>Fetching Images...</h2>
							</div>
						</div>
					</StyledModal>
				</Dialog>
				<footer className="mt-4 text-center">
					<p>
						created by <span>Adeoluwa Adeboye</span> -
						devChallenges.io
					</p>
				</footer>
			</div>
			<ToastContainer />
		</>
	);
};

export default LandingPage;
