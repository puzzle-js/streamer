import {expect} from "chai";
import {Server} from "../src/server";
import * as path from "path";
import * as fs from "fs";

const TEST_CONFIG = {
  TEST_PORT: 3242,
  TEST_URL: 'http://localhost:' + 3242,
  TEST_STATIC_FOLDER: path.join(__dirname, './static')
};

const SERVER_OPTIONS = {
  port: TEST_CONFIG.TEST_PORT
};

const defaultHandler = () => {
};


describe('Server', () => {
  beforeEach(() => {
    const cache = require.cache;
    for (let moduleId in cache) {
      delete cache[moduleId];
    }
  });

  it('should export server module', () => {
    const server: Server = new Server(defaultHandler, SERVER_OPTIONS);
    expect(server).to.be.an('object');
  });

  it('should has a listen method for listening port', () => {
    const server: Server = new Server(defaultHandler, SERVER_OPTIONS);
    expect(server.listen).to.be.a('function');
  });

  it('should start listening port', done => {
    const server: Server = new Server(defaultHandler, SERVER_OPTIONS);
    const listenHandler = (e: Error) => {
      expect(e).to.eq(undefined);
    };

    server.listen(listenHandler as any);
    server.close(done);
  });
});
