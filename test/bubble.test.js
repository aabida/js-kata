'use strict';

var chai = require('chai');
var expect = chai.expect;

var testUtils = require('./test-utils.js');
var utils = testUtils.testUtils;

var sut = require('../src/bubble.js');

it('should sort an array using bubble sort', function() {
	var dummyArray = utils.generateDummyArray(200);

	var dummyArrayCopy = utils.sortUsingJavascriptDefaultMethod(dummyArray);

	expect(sut.bubbleSort(dummyArray)).to.be.an('array').to.deep.equal(dummyArrayCopy);
});
