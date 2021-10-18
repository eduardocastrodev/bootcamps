const Database = require('./database/db')

// Open a server with Express
const express = require("express");
const server = express();

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require('./pages')

// Configure nunjucks (template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

  
  server
  //
  .use(express.urlencoded({ extended: true }))
  // Configure static files (css, scripts, images)
  .use(express.static("public"))
  // Application routes
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  // start server
  .listen(5500);
