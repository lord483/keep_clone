const fetchData = async (queryParam) => {
	try {
		const response = await fetch(`/api/?query=${queryParam}`);
		const data = await response.json();
		if (data) {
			return data;
		} else {
			return [];
		}
	} catch (error) {
		console.error(error);
	}
};

export default fetchData;
