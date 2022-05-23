import React from "react";
import StyledHeader from "../styles/Header.styled";
import { BiSearchAlt2 } from "react-icons/bi";

const Header: React.FC = () => {
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
						/>
					</div>
					<div className="col-sm-12 col-md-3 mt-3 add-photo-col">
						<button className="btn btn-success">Add a photo</button>
					</div>
				</div>
			</StyledHeader>
		</>
	);
};

export default Header;
