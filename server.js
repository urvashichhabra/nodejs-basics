import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;

const fileName = url.fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const server = http.createServer(async (req, resp) => {
  try {
    if (req.method === "GET") {
      let filePath;
      // if (req.url === "/") {
      //   resp.writeHead(200, { "Content-Type": "text/html" });
      //   resp.end("<h1>HomePage</h1>");
      // } else if (req.url === "/about") {
      //   resp.writeHead(200, { "Content-Type": "text/html" });
      //   resp.end("<h1>About</h1>");
      // } else {
      //   resp.writeHead(404, { "Content-Type": "text/html" });
      //   resp.end("<h1>Not Found</h1>");
      // }
      if (req.url === "/")
        filePath = path.join(dirName, "public", "index.html");
      else if (req.url === "/about")
        filePath = path.join(dirName, "public", "about.html");
      else throw new Error("Not Found");

      const data = await fs.readFile(filePath);

      resp.setHeader("Content-Type", "text/html");
      resp.write(data);
      resp.end();
    } else {
      throw new Error("Method not allowed.");
    }
  } catch (e) {
    resp.writeHead(500, { "Content-Type": "text/plain" });
    resp.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`SERVER is running on PORT ${PORT}`);
});
