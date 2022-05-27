import React, { useState } from "react";
import { Masonry } from "@mui/lab";
import StyledImageMasonry from "../styles/ImageMasonry.styled";
import { ImageList } from "../utils/types";
import DeleteModal from "./DeleteModal";

const ImageMasonry: React.FC<{
	images: ImageList;
}> = ({ images }) => {
	// Limit Length of image label
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [photoId, setPhotoId] = useState("");

	const handleDeleteModalOpen = () => setDeleteModalOpen(true);
	const handleDeleteModalClose = () => {
		// e.preventDefault();
		setDeleteModalOpen(false);
	};

	return (
		<>
			<StyledImageMasonry>
				<div className="mt-4">
					{images.length === 0 ? (
						<div className="text-center">
							<h2>No Photos Found</h2>
							<p>Please add a photo...</p>
						</div>
					) : (
						<Masonry
							columns={{ xs: 1, sm: 2, md: 3 }}
							spacing={3}
							style={{
								margin: 0,
							}}
						>
							{images.map((item, index) => (
								<div
									key={index}
									className="masonry-img-wrapper"
								>
									<button
										className="btn btn-success"
										onClick={() => {
											setPhotoId(item._id);
											handleDeleteModalOpen();
										}}
									>
										Delete
									</button>
									<img
										src={`${item.img_url}?w=162&auto=format`}
										srcSet={`${item.img_url}?w=162&auto=format&dpr=2 2x`}
										alt={item.label}
										loading="lazy"
										style={{
											borderRadius: 10,
											display: "block",
											width: "100%",
										}}
									/>
									<p className="img-label">{item.label}</p>
								</div>
							))}
						</Masonry>
					)}
					{/* Inline styling used to override the default material design style */}
				</div>
			</StyledImageMasonry>
			<DeleteModal
				open={deleteModalOpen}
				handleClose={handleDeleteModalClose}
				imgId={photoId}
			/>
		</>
	);
};

export default ImageMasonry;
