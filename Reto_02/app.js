function numPrimo(number) {
  if (number <= 1) {
    return "No es un numero primo";
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "No es un numero primo";
    }
  }

  return "Es primo";
}

function areaTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

const numIngresado = parseInt(prompt("Ingrese un número:"));
console.log(numPrimo(numIngresado));

const base = parseInt(prompt("Ingrese la base del triangulo:"));
const altura = parseInt(prompt("Ingrese la altura del triangulo:"));
console.log(areaTriangulo(base, altura));
