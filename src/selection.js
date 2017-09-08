'use strict';

var selectionSort = function(tableToSort) {

	for (var i=0; i<tableToSort.length - 1; i++) {
		var lowerNumberIndex = getIndexLowerNumberInTheRestOfTheTableUsingLinearSearch(tableToSort, i);

		swapElements(tableToSort, i, lowerNumberIndex);
	}

	return tableToSort;
};

var getIndexLowerNumberInTheRestOfTheTableUsingLinearSearch = function(array, beginningIndex) {
	var lowerNumberIndex = beginningIndex;

	for (var i=beginningIndex + 1; i<array.length; i++) {
		if (array[lowerNumberIndex] > array[i]) {
			lowerNumberIndex = i;
		}
	}
	return lowerNumberIndex;
};

var swapElements = function(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

module.exports.selectionSort = selectionSort;