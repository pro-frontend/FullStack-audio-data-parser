import http from "http";

const PORT = Number(process.argv[process.argv.length - 1]) || 3500;


const server = (port: number = PORT) => {
	const server = http.createServer((req, res) => {
		res.setHeader("Content-type", "plain/text");
		res.end("Request handled!");
	});

	server.listen(port, "localhost", () => {
		console.log(`listening port ${port}`);
	});
};

export default server;