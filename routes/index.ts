import { Request, Response } from "express";

interface Movie {
    title: string;
    episode_number: string;
    main_characters: string[];
    description: string;
    poster: string;
    hero_image: string;
}

const moviesJSON = require("../movies.json");

// Home Route
export const home = function(req: Request, res: Response) {
    const movies = moviesJSON.movies as Movie[];

    res.render("home", {
        title: "Star Wars Movies",
        movies: movies
    })
};

// Movie-single route
export const movie_single = function(req: Request, res: Response) {
    const episode_number : number = req.params.episode_number;

    const movies = moviesJSON.movies as Movie[];

    // Only render the movie_single template for episodes that exist
    if (episode_number >= 1 && episode_number <= 6) {
        const movie = movies[episode_number - 1];
        const title = movie.title;
        const main_characters = movie.main_characters;

        res.render("movie_single", {
            title: title,
            movies: movies,
            movie: movie,
            main_characters: main_characters
        });
    } else {
        res.render("notFound", {
            title: "Oops, this page doesn't exist",
            movies: movies
        });
    }
};

// Route for all other page requests
export const notFound = function(req: Request, res: Response) {
    const movies = moviesJSON.movies as Movie[];

    res.render("notFound", {
        title: "Oops, this page doesn't exist",
        movies: movies
    });
};