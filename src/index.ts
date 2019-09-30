import {Streamer} from "./streamer";
import {Configuration} from "./configuration";
import {Router} from "./router";
import {Server} from "./server";

const router = new Router();
const server = new Server();
const configuration = new Configuration();
const streamer = new Streamer(configuration, server, router);

exports = streamer;
