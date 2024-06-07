const express = require("express");
const PORT = process.env.PORT || 8000;
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", require("../routes/routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server on ! PORT ${this.port}`);
    });
  }
}

module.exports = Server;