const numero1 = Number(prompt("Ingresa el numero 1"));
const numero2 = Number(prompt("Ingresa el numero 2"));
const numero3 = Number(prompt("Ingresa el numero 3"));

const numeros = [numero1,numero2,numero3];

alert(`Tus numeros son: ${numeros} `);

/* 
Detecta si los numeros son iguales o diferentes
*/
if ((numero1 && numero2 && numero3 == numeros)) {
  alert("Los numeros son iguales")
  console.log("Los numeros son iguales")
} else {
  alert("Los numeros son diferentes")
  console.log("Los numeros son diferentes")
}

/* 
Ordena los numeros de menor a mayor, mayor a menor, y al final
digita el numero que se escribio en el centro
*/

let numeroCentro = numero2;
alert(`Tus numeros son: ${numeros} y tu numero del centro es ${numeroCentro} `);

let numeroMenor = numeros.sort();
alert(`Tus numeros de menor a mayor: ${numeroMenor} `);

let numeroMayor = numeroMenor.reverse();
alert(`Tus numeros de mayor a menor: ${numeroMayor} `);

