const filterNotesByType = (list, currentStatus) => {
	const newList = list.filter((singleItem) => {
		return singleItem.status === currentStatus;
	});
	return newList;
};

export default filterNotesByType;
