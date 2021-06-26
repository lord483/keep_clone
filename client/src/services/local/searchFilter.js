import escapeWithSpecialChar from "./searchConfig";
import fetchData from "../api/fetchData";

const searchFilter = async (searchTerm) => {
	return await fetchData(escapeWithSpecialChar(searchTerm));
};

export default searchFilter;
