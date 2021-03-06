const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

let output = movies
    .filter(movie => (movie.year === 2018 && movie.rating >= 4))
    .sort((m1, m2) =>  (m2.rating - m1.rating))
    .map(movie => movie.title);

console.log(output);
