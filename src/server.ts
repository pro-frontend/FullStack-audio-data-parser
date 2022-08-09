import http from "http";

const PORT = 3500;

const server = () => {
	const server = http.createServer((req, res) => {
		res.setHeader("Content-type", "application/json");
		// const data = JSON.stringify(req);

		// res.end(data);
		res.end("{aaa: aaa}");
	});

	server.listen(PORT, "localhost", () => {
		console.log(`listening port ${PORT}`);
	});
};

export default server;