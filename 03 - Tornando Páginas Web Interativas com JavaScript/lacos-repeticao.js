// SWITCH
function mostrarDia(dia) {
  switch (dia) {
    case 1:
      console.log("Segunda");
      break;
    case 2:
      console.log("Terça");
      break;
    default:
      break;
  }
}

mostrarDia(2);

// FOR
for (let i = 1; i < 3; i++) {
  console.log(`${i} x  5 = ${i * 5}`);
}

// WHILE
let i = 1;
while (i < 3) {
  console.log(`Oi ${i}`);
  i++;
}

// FOREACH
const valores = [1, 2, 3, 4];
valores.forEach((element) => {
  console.log(`ForEach trabalha com arrays: ${element}`);
});

// MAP
const outrosValores = valores.map((element) => {
  return element * 5;
});

console.log(` ** Usando Map: \n${outrosValores}`);
