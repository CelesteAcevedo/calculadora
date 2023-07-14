let valor = 0;
let resultado = document.querySelector(".resultado");

function agregarNumero(numero) {
  if (resultado.innerText === "0") {
    resultado.innerText = numero;
  } else {
    resultado.innerText = resultado.innerText + numero;
  }
}

function agregarSimbolo(simbolo) {
  if (resultado.innerText.includes(".") && simbolo === ".") {
    return;
  }

  resultado.innerText = resultado.innerText + simbolo;
}

function operacion(tipo) {
  if (tipo === "suma") {
    agregarSimbolo(" + ");
  }

  if (tipo === "resta") {
    agregarSimbolo(" - ");
  }
  if (tipo === "multiplicacion") {
    agregarSimbolo(" * ");
  }
  if (tipo === "division") {
    agregarSimbolo(" / ");
  }
}

function mostrarResultado() {
  const [numero1, operacion, numero2] = resultado.innerText.split(" ");

  if (operacion === "*") {
    valor = Number(numero1) * Number(numero2);
  }

  if (operacion === "/") {
    valor = Number(numero1) / Number(numero2);
  }

  if (operacion === "+") {
    valor = Number(numero1) + Number(numero2);
  }

  if (operacion === "-") {
    valor = Number(numero1) - Number(numero2);
  }
  resultado.innerText = valor;
}

function limpiar() {
  valor = 0;
  resultado.innerText = valor;
  document.getElementById("numero-1").value = 0;
  document.getElementById("numero-2").value = 0;
}
