const imagesUrl = () => {
	if (process.env.NODE_ENV === "production") {
		return "https://unsplash.juggyprojects.com/api/v1/images";
	} else {
		// return "http://127.0.0.1:8000/v1/image/";
		// return "http://localhost:8000/api/v1/images";
		return "http://127.0.0.1:8000/api/v1/images/";
	}
};

export default imagesUrl;
