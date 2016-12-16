import * as express from "express";
import * as path from "path";
import * as routes from "./routes/index";

const app = express(); 

app.set("view engine", "ejs");

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", routes.home);

app.get("/star_wars_episode/:episode_number?", routes.movie_single);

app.get("*", routes.notFound);


// Listen on port 3000
app.listen(process.env.PORT || 3000);
