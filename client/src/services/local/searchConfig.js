// Escape special characters in RegExp and JS
// searchParam = your search query or sring to be filtered

export default function escapeWithSpecialChar(searchParam) {
	return searchParam.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
