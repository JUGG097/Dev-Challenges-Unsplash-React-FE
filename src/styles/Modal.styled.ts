import styled from "styled-components";

const StyledModal = styled.div`
	padding: 25px 15px;
	width: 95%;

	label {
		font-family: "Noto Sans";
		font-weight: 500;
		font-size: 14px;
		color: #4f4f4f;
	}

	input {
		width: 100%;
		height: 45px;
		border: 1px solid #4f4f4f;
		border-radius: 12px;
		filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
		padding: 5px 5px 5px 5px;
		/* color: #bdbdbd; */
		font-size: 14px;
	}

	.modal-title {
		h2 {
			font-family: "Noto Sans";
			font-weight: 500;
			font-size: 24px;
			color: #333333;
		}
	}

	.modal-title-2 {
		h2 {
			font-family: "Noto Sans";
			font-weight: 500;
			font-size: 24px;
			color: #333333;
			text-align: center;
		}
	}

	.form-btn-group-1 {
		button {
			width: 100%;
			height: 40px;
			box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
			border-radius: 12px;
			background: #ffffff;
			border-color: #ffffff;
			font-family: "Noto Sans";
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			color: #bdbdbd;
		}
	}

	.form-btn-group-2 {
		button {
			width: 100%;
			height: 40px;
			box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
			border-radius: 12px;
			background: #3db46d;
			border-color: #3db46d;
			font-family: "Noto Sans";
			font-style: normal;
			font-weight: 700;
			font-size: 16px;
		}
	}

	.form-btn-group-3 {
		button {
			width: 100%;
			height: 40px;
			box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
			border-radius: 12px;
			background: #eb5757;
			border-color: #eb5757;
			font-family: "Noto Sans";
			font-style: normal;
			font-weight: 700;
			font-size: 16px;
		}
	}
`;

export default StyledModal;
