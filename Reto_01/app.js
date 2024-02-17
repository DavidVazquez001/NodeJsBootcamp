function sumaPares(numero) {
  let suma = 0;

  for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }

  return suma;
}

function cuentaVocales(cadena) {
  const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let conteo = 0;
  let letra;

  for (letra of cadena) {
    if (vocales.includes(letra)) {
      conteo++;
    }
  }

  return conteo;
}

//Lectura de número
const numIngresado = parseInt(prompt("Ingrese un número:"));

//Lectura de cadena
const cadenaIngresada = prompt("Ingrese una cadena de texto:");

//Llamado a las funciones
const resultadoSuma = sumaPares(numIngresado);
console.log("Suma de números pares:", resultadoSuma);

const resultadoConteo = cuentaVocales(cadenaIngresada);
console.log("Conteo de vocales:", resultadoConteo);
