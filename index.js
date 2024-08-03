const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();

// Enable CORS for all routes
server.use(cors());

// Add authentication middleware
server.db = router.db;

// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Use default router
server.use(router);

// Start server
const port = 3000;

server.listen(port);
