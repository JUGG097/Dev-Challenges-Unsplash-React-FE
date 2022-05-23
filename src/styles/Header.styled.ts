import styled from "styled-components";

const StyledHeader = styled.div`
	/* Added to match the margin set by Material UI Masonry Component */
	margin: 0 12px;

	.search-input-col {
		margin-left: -20px;
		position: relative;

		input {
			width: 100%;
			height: 40px;
			border: 1px solid #bdbdbd;
			border-radius: 12px;
			filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
			padding: 5px 5px 5px 25px;
			color: #bdbdbd;
			font-size: 14px;
		}

		input::placeholder {
			color: #bdbdbd;
			font-size: 14px;
		}

		svg {
			position: absolute;
			color: #bdbdbd;
			font-size: 14px;
			left: 20px;
			top: 15px;
			z-index: 99;
		}
	}

	.add-photo-col {
		margin-left: auto;
		font-size: 16px;
		font-weight: 700;

		button {
			width: 100%;
			height: 40px;
			box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
			border-radius: 12px;
			background: #3db46d;
			border-color: #3db46d;
		}
	}

	@media (max-width: 768px) {
		.search-input-col {
			margin-left: 0px;
		}
	}
`;

export default StyledHeader;
