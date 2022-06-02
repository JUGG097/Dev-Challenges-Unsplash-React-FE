import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import { errorToast } from "../utils/helper";
import StyledModal from "../styles/Modal.styled";
import { DeleteModalProps } from "../utils/types";
import { useAppDispatch } from "../app/hooks";
import { deleteImage } from "../features/images/imageSlice";
import imagesUrl from "../utils/urls";

const DeleteModal: React.FC<DeleteModalProps> = ({
	open,
	handleClose,
	imgId,
}) => {
	const dispatch = useAppDispatch();
	const [deleteImageLoading, setDeleteImageLoading] = useState(false);

	const handleDeleteImage = () => {
		const url = imagesUrl();
		setDeleteImageLoading(true);
		// Axios request and redux dispatch goes here
		axios
			.delete(`${url}${imgId}/`)
			.then((res) => {
				dispatch(deleteImage(imgId));
				handleClose();
				setDeleteImageLoading(false);
			})
			.catch((err) => {
				handleClose();
				setDeleteImageLoading(false);
				errorToast("Could not delete photo");
			});
	};
	return (
		<>
			<Dialog
				open={open}
				maxWidth="sm"
				fullWidth={true}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				{deleteImageLoading ? (
					<StyledModal>
						<div className="row mt-2">
							<div className="col-12 modal-title-2">
								<h2>Deleting image...</h2>
							</div>
						</div>
					</StyledModal>
				) : (
					<StyledModal>
						<div className="row mt-2">
							<div className="col-12 modal-title">
								<h2>Are you sure?</h2>
							</div>
						</div>

						<form>
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
								<div className="col-sm-3 form-btn-group-3 mt-2">
									<button
										className="btn btn-primary"
										type="button"
										onClick={handleDeleteImage}
									>
										Delete
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

export default DeleteModal;
