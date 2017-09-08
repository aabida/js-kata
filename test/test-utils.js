'use strict';

function generateDummyArray(size) {
	var dummyArray = [];
	for (var i=0; i<size; i++) {
		dummyArray.push(Math.floor((Math.random() * 100) + 1));
	}

	return dummyArray;
}

function sortUsingJavascriptDefaultMethod(arrayToSort) {
	var dummyArrayCopy = arrayToSort.slice(0);
	dummyArrayCopy.sort(function(a, b) {
		return a-b;
    });

	return dummyArrayCopy;
}

var testUtils = {
	generateDummyArray : generateDummyArray,
	sortUsingJavascriptDefaultMethod : sortUsingJavascriptDefaultMethod
};

module.exports.testUtils = testUtils;