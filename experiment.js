const fs = require("fs");

let arr =  [
		'5C', '01', '5C', '01', 'FB', '01', 'FB', '01',
		'FB', '01', 'FB', '01', '0B', '02', '0B', '02',
		'D3', '01', 'D3', '01', 'F3', '01', 'F3', '01',
		'FB', '01', 'FB', '01', '13', '02', '13', '02',
		'52', '02', '52', '02', 'FB', '01', 'FB', '01',
		'03', '02', '03', '02', '03', '02', '05', '02'],
	newArr = [];

for(let i = 0; i < arr.length; i += 2) {
	newArr.push('0x' + (arr[i + 1]) + (arr[i]));
}

for(let i = 0; i < newArr.length; i += 1) {
	newArr[i] = parseInt(newArr[i]);
	newArr[i] = newArr[i].toString();
	newArr[i] += "\r\n";
}

newArr = newArr.toString();

for(let i = 0; i < newArr.length; i++) {
	newArr = newArr.replace(",", "");
}

fs.writeFile("data.txt", newArr, function(err, data) {
	if (err) throw err;
});