//
//
//
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))  {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');  
        if (a != null && b != null && a != '' && b != '' && a.length < 70 ) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Malo");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Classic");
    } else if (personalMovieDB >= 30) {
        console.log("Kinoman");
    } else {
        console.log("Error");
    }
 }

 detectPersonalLevel();

 function showMyDB() {
     if(!personalMovieDB.privat) {
         console.log(personalMovieDB);
 }
}

showMyDB();

 function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt('Ваш любимый жанр под номером ${i}');
    }    
 }

writeYourGenres();
