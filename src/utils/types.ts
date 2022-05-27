export type ImageList = {
	_id: string;
	img_url: string;
	label: string;
}[];

export type AddModalProps = {
	open: boolean;
	handleClose: () => void;
};

export type DeleteModalProps = {
	open: boolean;
	handleClose: () => void;
	imgId: string;
};

export type HeaderProps = {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ImageData = {
	_id: string;
	img_url: string;
	label: string;
};

export type ImageSliceProps = {
	images: ImageList;
	searchTerm: string;
	filterImages: ImageList;
};
