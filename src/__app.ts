import fs from "fs";

export const fileHandler = () => {
	fs.readFile("data.log", function (err, data) {
		if (err) throw err;
		const arr = data.toString(),
			newArr,
			resultArr = [];
		newArr = arr.split("\n");
		newArr.shift();
		newArr.shift();
		newArr.shift();
		newArr.pop();
		newArr.pop();
		newArr.pop();
		newArr.pop();
		newArr.pop();
	
		newArr = newArr.toString();
		newArr = newArr.split(" ");
	
		newArr.pop();
	
		for (let i = 0; i < newArr.length; i += 1) {
			newArr[i] = newArr[i].replace(",", "");
		}
	
		for (let i = 0; i < newArr.length; i += 2) {
			resultArr.push("0x" + newArr[i + 1] + newArr[i]);
		}
	
		for (let i = 0; i < resultArr.length; i += 1) {
			resultArr[i] = parseInt(resultArr[i]);
			if (resultArr[i] > 32768) {
				resultArr[i] = resultArr[i] - 65536;
			}
			resultArr[i] = resultArr[i].toString();
			resultArr[i] += "\r\n";
		}
	
		resultArr = resultArr.join("");
	
		console.log(resultArr);
	
		fs.writeFile("data.csv", resultArr, function (err, resultArr) {
			if (err) throw err;
		});
	});
};

