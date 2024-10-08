import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Dae" },
  { id: 2, name: "Jane Dae" },
  { id: 3, name: "Jack Doe" },
];

// middleware
const logger = (req, res, next) => {
  console.log(`${req.url} ${req.method}`);
  next();
};

const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")?.[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found." }));
  }
  res.end();
};

//POST /api/users
const createUserHandler = (req, res) => {
  let body = "";
  // read body
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found." }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
