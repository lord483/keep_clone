const deleteNote = async (data) => {
	try {
		console.log(data);
		const response = await fetch(`/api/delete`, {
			method: "DELETE",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return response.json();
	} catch (error) {
		console.error(error);
	}
};

export default deleteNote;
