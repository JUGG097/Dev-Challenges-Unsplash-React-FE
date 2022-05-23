import React from "react";
import { Masonry } from "@mui/lab";
import StyledImageMasonry from "../styles/ImageMasonry.styled";
import { ImageList } from "../utils/types";

const ImageMasonry: React.FC<{
	images: ImageList;
}> = ({ images }) => {
	// Limit Length of image label

	return (
		<>
			<StyledImageMasonry>
				<div className="mt-4">
					{/* Inline styling used to override the default material design style */}
					<Masonry
						columns={{ xs: 1, sm: 2, md: 3 }}
						spacing={3}
						style={{
							margin: 0,
						}}
					>
						{images.map((item, index) => (
							<div key={index} className="masonry-img-wrapper">
								<button className="btn btn-success">
									Delete
								</button>
								<img
									src={`${item.img}?w=162&auto=format`}
									srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
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
				</div>
			</StyledImageMasonry>
		</>
	);
};

export default ImageMasonry;
