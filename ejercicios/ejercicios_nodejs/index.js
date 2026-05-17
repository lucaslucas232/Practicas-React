import chalk from "chalk";
import cowsay from "cowsay";
import axios from "axios";
import { uniqueNamesGenerator, names } from 'unique-names-generator';
console.log(chalk.yellow("hola carola"))
console.log('---------------------');
// Ejercicio 1 //


console.log(chalk.green('BIEN!! BOLAS'));

console.log(chalk.red('Error'));

console.log(chalk.yellow('OJOO'));
console.log('-------------------------------');
// Ejercicio 2 //

console.log(cowsay.say({
    text : "dont be a donkey",
    e : "--",
    T : "U "
}));

// Ejercicio 3 y 5 //


async function obtenerPokemon(nombrePokemon) {
  try {
   
    const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon/' + nombrePokemon);
    
    const { name, height, weight } = respuesta.data;
    
  console.log('---------------------------------------------------------');

    console.log('Nombre: ' + name);
    console.log('Altura: ' + height);
    console.log('Peso: ' + weight);
    console.log('---------------------');
    console.log('---------------------');

    for (let i = 1; i <= 5; i++) {
const shortName = uniqueNamesGenerator({
  dictionaries: [names],
  
});
console.log(i + '. ' + shortName);
    }

  } catch (error) {
    console.error('error', error.message);
  }
}

obtenerPokemon('charizard');
console.log('---------------------');

//ejercicio 5//

