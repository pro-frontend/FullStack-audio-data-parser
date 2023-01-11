import http from "http";
import express from "express";

const PORT = Number(process.argv[process.argv.length - 1]) || 3500;

const app = express();

app.listen(PORT);



const server = (port: number = PORT) => {
	const server = http.createServer((req, res) => {
		res.setHeader("Content-type", "plain/text");
		res.end("Request handled!");
	});

	server.listen(port, "localhost", () => {
		// console.log(`listening port ${port}`);
	});
};

export default server;

// type MaxFromArray<ArrayType> = (
// 	array: ArrayType[], 
// 	iteration?: number,
// 	result?: ArrayType | null, 
// ) => ArrayType | null;

const maxFromArray/*: MaxFromArray<number>*/ = (
	array,
	iteration = 0,
	result
) => {
	if(array.length === 0) {
		return null;
	} else if(array.length === 1) return array[0];

	const max = array[iteration] > array[iteration + 1] 
		? array[iteration] 
		: array[iteration + 1];
	maxFromArray(array, );
};

console.log("\n", maxFromArray([1, 5, 3, 4]));
console.log("\n", maxFromArray([1]));
console.log("\n", maxFromArray([]));
