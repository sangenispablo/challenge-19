// Creo una funcion que la voy a usar en el futuro
function randomDesdeHasta(minimo, maximo) {
    let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

const opciones = ['Piedra', 'Papel', 'Tijera'];
const piedra = 0;
const papel = 1;
const tijera = 2;

let opcionUsuario;
let opcionMaquina = randomDesdeHasta(0, 2);

let invalido = true;
while (invalido) {
    opcionUsuario = Number(prompt("Juga con:\n0: Piedra\n1: Papel\n2: Tijera", 0));
    if (!isNaN(opcionUsuario) && opcionUsuario >= 0 && opcionUsuario <= 2) {
        invalido = false;
    } else {
        alert('Elige una opcion valida !!!');
    }
}

document.write(`Humano ${opciones[opcionUsuario]} <br>`);
document.write(`Maquina ${opciones[opcionMaquina]} <br>`);

// Parto desde el usuario y sus posibilidades frente a la maquina
// Creo que con el if else if se lee mucho mejor, creo
if (opcionUsuario === piedra) {
    if (opcionMaquina === piedra) {
        document.write(`EMPATE <br>`);
    } else if (opcionMaquina === papel) {
        document.write(`PERDISTE Humano !!! <br>`);
    } else if (opcionMaquina === tijera) {
        document.write(`GANASTE Humano !!! <br>`);
    }
} else if (opcionUsuario === papel) {
    if (opcionMaquina === piedra) {
        document.write(`GANASTE Humano !!! <br>`);
    } else if (opcionMaquina === papel) {
        document.write(`EMPATE <br>`);
    } else if (opcionMaquina === tijera) {
        document.write(`PERDISTE Humano !!! <br>`);
    }
} else if (opcionUsuario === tijera) {
    if (opcionMaquina === piedra) {
        document.write(`PERDISTE Humano !!! <br>`);
    } else if (opcionMaquina === papel) {
        document.write(`GANASTE Humano !!! <br>`);
    } else if (opcionMaquina === tijera) {
        document.write(`EMPATE <br>`);
    }
} else {
    document.write(`Algo se rompio`);
}