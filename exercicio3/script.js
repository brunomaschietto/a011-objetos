const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//a 
const pokemon2 = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água'
};

//b
pokemon1.ataques = [];

const ataque1 = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}

pokemon1.ataques.push(ataque1);

//c

pokemon2.ataques = [...pokemon1.ataques]


//d
const ataque2 = {
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
}

pokemon1.ataques.push(ataque2)

//e
pokemon2.ataques.push({...ataque2,
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100});

//f 
console.log(pokemon1, pokemon2);
