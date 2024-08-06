const marvelHeros = ["Iron-man","Spideman","Thor"]
const dcHeros = ["Batman","Superman","Flash"]

// marvelHeros.push(dcHeros) // push actual to the exit array 
// console.log(marvelHeros);

// marvelHeros.concat(dcHeros)
// console.log(marvelHeros);

// const allHero = marvelHeros.concat(dcHeros) //where concat returns new array
// console.log(allHero);

const all_hero = [...dcHeros,...marvelHeros]
console.log(all_hero)