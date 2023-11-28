class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie with title, studio, and rating
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example array of Movie instances
const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    // ... add more movies as needed
];

// Filtering movies with a rating of "PG"
const pgMovies = Movie.getPG(moviesArray);

console.log(casinoRoyale);
console.log(pgMovies);
