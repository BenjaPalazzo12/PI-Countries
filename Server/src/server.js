const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
// const express = require("express");
// const router = require("./routes");
// const morgan = require("morgan");
// const cors = require("cors");

// const server = express();

// server.use(morgan("dev"));
// server.use(express.json());

// const allowedOrigins = ["http://localhost:3001"];
// server.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Origin not allowed by CORS"));
//       }
//     },
//   })
// );

// server.use(router);

// module.exports = server;
