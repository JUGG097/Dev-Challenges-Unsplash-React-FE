export type ImageList = {
	id: string;
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
	imgId?: string;
};

export type ImageData = {
	id: string;
	img_url: string;
	label: string;
};
