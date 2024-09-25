import http from "http";

const PORT = 8000;

const server = http.createServer((req, resp) => {
  //   resp.setHeader("Content-Type", "text/plain");
  //   resp.write("<h1>HELLO WORLD!</h1>");
  //   resp.end();

  resp.writeHead(500, { "Content-Type": "application/json" });
  resp.end(JSON.stringify({ message: "SERVER ERROR" }));
});

server.listen(PORT, () => {
  console.log(`SERVER is running on PORT ${PORT}`);
});
