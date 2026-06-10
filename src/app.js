const express = require("express");
const createError = require("http-errors");

//Where routers are placed (eg: const statusRouter = require('./routers/Status.router');)
const path = require("path");

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
//Where links are placed (eg: app.use('/statuses', statusRouter);)

app.use((req, res, next) => {
  next(createError(404, `Unknown resource ${req.method} ${req.originalUrl}`));
});

module.exports = app;
