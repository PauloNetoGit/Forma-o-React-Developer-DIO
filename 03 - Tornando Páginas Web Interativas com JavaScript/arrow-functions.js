function somar(num1, num2) {
    return num1 + num2
}

const resultado = somar(5, 12);

console.log(resultado);

// TANSFORMANDO A MESMA FUNÇÃO ACIMA EM ARROW FUNCTION
const somarNovamente = (num1, num2) => {
    return num1 + num2
}

const resultadoNovamente = somarNovamente(5, 12)

console.log(resultadoNovamente);


// DIMINUINDO AINDA MAIS A FUNÇÃO, O "return" ESTÁ IMPLICITO POR ISSO NÃO ADICIONAMOS
const outraSoma = (num1, num2) => num1 + num2

const outroResultado = somarNovamente(5, 12)

console.log(outroResultado);
