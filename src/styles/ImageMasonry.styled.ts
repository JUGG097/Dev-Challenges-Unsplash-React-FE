import styled from "styled-components";

const StyledImageMasonry = styled.div`
	.masonry-img-wrapper {
		position: relative;

		img {
		}

		button {
			position: absolute;
			top: 10px;
			right: 5px;
			height: 23px;
			background-color: black;
			border-color: #eb5757;
			border-radius: 30px;
			font-size: 10px;
			color: #eb5757;
			font-family: "Montserrat";
			padding: 4px 10px;
			opacity: 0;
		}

		p {
			position: absolute;
			bottom: 5px;
			left: 5px;
			z-index: 99;
			font-weight: 700;
			font-size: 18px;
			font-family: "Montserrat";
			color: white;
			opacity: 0;
		}
	}

	.masonry-img-wrapper:hover {
		button {
			opacity: 1;
		}

		p {
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		.masonry-img-wrapper {
			button {
				opacity: 1;
			}

			p {
				opacity: 1;
			}
		}
	}
`;

export default StyledImageMasonry;
