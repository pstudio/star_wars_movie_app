"use strict";
var express = require("express");
var path = require("path");
var routes = require("./routes/index");
var app = express();
app.set("view engine", "ejs");
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, "public")));
// Routes
app.get("/", routes.home);
app.get("/star_wars_episode/:episode_number?", routes.movie_single);
app.get("*", routes.notFound);
// Listen on port 3000
app.listen(process.env.PORT || 3000);
//# sourceMappingURL=app.js.map