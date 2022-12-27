import "./database";
import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000, () => console.log("Server listening on port 3000"));
