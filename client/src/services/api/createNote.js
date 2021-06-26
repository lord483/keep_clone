const createNote = async (postData) => {
	try {
		const response = await fetch(`/api`, {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(postData),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export default createNote;
