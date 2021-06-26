const updateNote = async (data) => {
	try {
		const response = await fetch(`/api/update`, {
			method: "PUT",
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

export default updateNote;
