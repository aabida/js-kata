'use strict';

var chai = require('chai');
var expect = chai.expect;

var testUtils = require('./test-utils.js');
var utils = testUtils.testUtils;

var sut = require('../src/selection.js');

it('should sort an array using selection sort', function() {
	var dummyArray = utils.generateDummyArray(100);

	var dummyArrayCopy = utils.sortUsingJavascriptDefaultMethod(dummyArray);

	expect(sut.selectionSort(dummyArray)).to.be.an('array').to.deep.equal(dummyArrayCopy);
});
