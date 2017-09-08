'use strict';

var bubbleSort = function(tableToSort) {
	var tableLength = tableToSort.length;

	for (var i = 0; i < tableLength - 1; i++) {
		for (var comp = tableLength - 2; comp >= i; comp--) {
			var leftIndex = comp;
			var rightIndex = comp+1;

			order(tableToSort, leftIndex, rightIndex);
		}
	}

	return tableToSort;
};

function order(tableToSort, leftIndex, rightIndex) {
	if (tableToSort[leftIndex] > tableToSort[rightIndex]) {
		var temp = tableToSort[leftIndex];

		tableToSort[leftIndex] = tableToSort[rightIndex];
		tableToSort[rightIndex] = temp;
	}
}

module.exports.bubbleSort = bubbleSort;