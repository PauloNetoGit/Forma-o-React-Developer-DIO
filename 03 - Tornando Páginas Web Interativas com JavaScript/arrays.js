// objetos de array
let cidades = [
    {name: 'Los Angeles', population: 3821621},
    {name: 'New York', population: 8258133 }
]

// adicionar otens no array
cidades.push({name: 'Chicago', population: 2664598})

const percorrendo = cidades.map((index) => {
    console.log(index.name);
})


// filtrar população com uma condição
const filtro = cidades.filter((exibirPopulação) => exibirPopulação.population >= 5000000)
console.table(filtro);



