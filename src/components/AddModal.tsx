import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import { errorToast } from "../utils/helper";
import StyledModal from "../styles/Modal.styled";
import { AddModalProps, ImageData } from "../utils/types";
import { useAppDispatch } from "../app/hooks";
import { addImage } from "../features/images/imageSlice";
import imagesUrl from "../utils/urls";

const AddModal: React.FC<AddModalProps> = ({ open, handleClose }) => {
	const dispatch = useAppDispatch();
	const [addImageLoading, setAddImageLoading] = useState(false);
	const [imgData, setImgData] = useState<ImageData>({
		_id: "1ws",
		img_url: "",
		label: "",
	});

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setImgData({ ...imgData, [e.target.name]: e.target.value });
	};

	const handleAddImage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const url = imagesUrl();
		setAddImageLoading(true);
		// Axios Request goes here
		axios
			.post(url, imgData)
			.then((res) => {
				dispatch(addImage(res.data.data));
				handleClose();
				setAddImageLoading(false);
			})
			.catch((err) => {
				handleClose();
				setAddImageLoading(false);
				errorToast("Could not add photo");
			});

		// Reset the form state
		setImgData({
			_id: "",
			img_url: "",
			label: "",
		});
	};

	return (
		<>
			<Dialog
				open={open}
				// To disable keyboard automatically closing the modal
				// onClose={handleClose}
				maxWidth="sm"
				fullWidth={true}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					borderRadius: "10px",
				}}
			>
				{addImageLoading ? (
					<StyledModal>
						<div className="row mt-2">
							<div className="col-12 modal-title-2">
								<h2>Adding new image...</h2>
							</div>
						</div>
					</StyledModal>
				) : (
					<StyledModal>
						<div className="row mt-2">
							<div className="col-12 modal-title">
								<h2>Add a new photo</h2>
							</div>
						</div>

						<form>
							<div className="row mt-2 img-label-input">
								<div className="col-12">
									<label htmlFor="label">Label*</label>
								</div>
								<div className="col-12">
									<input
										type="text"
										name="label"
										id="label"
										value={imgData.label}
										onChange={onInputChange}
										required
									/>
								</div>
							</div>

							<div className="row mt-4 img-url-input">
								<div className="col-12">
									<label htmlFor="url">Photo URL*</label>
								</div>
								<div className="col-12">
									<input
										type="text"
										name="img_url"
										id="img_url"
										value={imgData.img_url}
										onChange={onInputChange}
										required
									/>
								</div>
							</div>

							<div className="row mt-4">
								<div className="col-sm-6"></div>
								<div className="col-sm-3 form-btn-group-1 mt-2">
									<button
										className="btn btn-primary"
										onClick={handleClose}
										type="button"
									>
										Cancel
									</button>
								</div>
								<div className="col-sm-3 form-btn-group-2 mt-2">
									<button
										className="btn btn-primary"
										type="submit"
										onClick={handleAddImage}
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</StyledModal>
				)}
			</Dialog>
		</>
	);
};

export default AddModal;
