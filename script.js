const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

for (let i = 0; i < 2; i++) {
    const movieName = prompt('Один из последних просмотренных фильмов?');
    const movieRating = prompt('На сколько оцените его?');

    if (movieName !== null && movieRating !== null && movieName !== '' && movieRating !== '' && movieName.length <= 50) {
        personalMovieDB.movies[movieName] = movieRating;
    } else {
        i--;
    }
}

console.log(personalMovieDB);
