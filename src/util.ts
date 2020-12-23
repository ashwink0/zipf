let fs = require('fs');
const util = require("util");

export function getData(text: string) {
	console.log('a')
	let frequencies = getWordFrequency(text.replace(/\r?\n|\r/g, '').replace(/\r?\'|\r/g, ''))

	var sortable = [];
	// @ts-ignore
	for (var item in frequencies) {
		sortable.push([item, frequencies[item]]);
	}

	sortable.sort(function (a: any, b: any) {
		return a[1] - b[1];
	});

	console.log(JSON.stringify(sortable))

	let max: number= parseInt(sortable[sortable.length - 1][1]);

	let retData: { name: string; actual: string; expected: number; }[]=[]

	sortable.reverse().map((item, index) => {
		console.log(item)
		retData.push({
			name: item[0], actual: item[1], expected: Math.round(max/(index+1))
		})
	})
	console.log(retData);
	return retData;
}


function getWordFrequency(data: string) {
	var pattern = /\w+/g,
		string = data.toLowerCase(),
		matchedWords = string.match(pattern);

	// @ts-ignore
	var counts = matchedWords.reduce(function (stats: Array<any>, word: number) {
		if (stats.hasOwnProperty(word)) {
			stats[word] = stats[word] + 1;
		} else {
			stats[word] = 1;
		}
		return stats;
	}, {});
	return counts
}