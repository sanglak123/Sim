const express = require("express");
const cors = require("cors");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const hostname = process.env.NEXT_PUBLIC_HOST_NAME;
  const port = process.env.NEXT_PUBLIC_PORT || 3000;

  const server = express();

  server.use(express.json());
  server.use(cors());

  server.get("/a", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const { sequelize } = require("./src/data/db/models");
  const handleCheckDB = async () => {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  };

  handleCheckDB();

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
