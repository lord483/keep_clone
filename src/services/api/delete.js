const deleteNote = async (data) => {
	try {
		const response = await fetch("/api/delete", {
			method: "DELETE",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data.query),
		});
		return response.json();
	} catch (error) {
		console.error(error);
	}
};

export default deleteNote;
