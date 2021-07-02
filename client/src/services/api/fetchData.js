const fetchData = async (queryParam) => {
	try {
		const response = await fetch(`/api/?query=${queryParam}`);
		const data = response;
		if (data) {
			return data.json();
		} else {
			return [];
		}
	} catch (error) {
		console.error(error);
	}
};

export default fetchData;
