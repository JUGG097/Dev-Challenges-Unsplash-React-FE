import React, { useState } from "react";
import StyledHeader from "../styles/Header.styled";
import { BiSearchAlt2 } from "react-icons/bi";
import AddModal from "./AddModal";
import { HeaderProps } from "../utils/types";

const Header: React.FC<HeaderProps> = ({ handleChange }) => {
	const [addModalOpen, setAddModalOpen] = useState(false);

	const handleAddModalOpen = () => setAddModalOpen(true);
	const handleAddModalClose = () => {
		setAddModalOpen(false);
	};

	return (
		<>
			<StyledHeader>
				<div className="row mt-1">
					<div className="col-sm-4 col-md-2 mt-3">
						<img
							src="/img/my_unsplash_logo.svg"
							alt="Unsplash Logo"
							className="img-fluid"
						/>
					</div>
					<div className="col-sm-8 col-md-4 mt-3 search-input-col">
						<BiSearchAlt2 />
						<input
							type="search"
							name="img-search"
							id="img-search"
							placeholder="Search by name"
							onChange={handleChange}
						/>
					</div>
					<div className="col-sm-12 col-md-3 mt-3 add-photo-col">
						<button
							className="btn btn-success"
							onClick={handleAddModalOpen}
						>
							Add a photo
						</button>
					</div>
				</div>
			</StyledHeader>
			<AddModal open={addModalOpen} handleClose={handleAddModalClose} />
		</>
	);
};

export default Header;
