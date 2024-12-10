const marvel_heroes= ["thor","ironman","spiderman"]
const dc_heroes = ["superman","batman","greenlantern"]

marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

const allheros = marvel_heroes.concat(dc_heroes)
console.log(allheros);

const all_heroes= [...marvel_heroes,...dc_heroes]
console.log(all_heroes);
