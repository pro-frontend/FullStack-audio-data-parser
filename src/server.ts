import http from "http";

const PORT = 3500;

const server = () => {
	const server = http.createServer((req, res) => {
		res.setHeader("Content-type", "plain/text");
		res.end("Request handled!");
	});

	server.listen(PORT, "localhost", () => {
		console.log(`listening port ${PORT}`);
	});
};

export default server;