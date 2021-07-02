import fetchData from "../services/api/fetchData";

const getData = (query) => {
	const result = fetchData(JSON.stringify(query)).then((res) => {
		return res;
	});
	return result;
};

export default getData;
