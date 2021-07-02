import fetchData from "../api/fetchData";

const searchFilter = async (searchTerm) => {
	return await fetchData(searchTerm);
};

export default searchFilter;
