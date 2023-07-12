let valor = 0;
let resultado = document.querySelector(".resultado");

function agregarNumero(numero) {
  if (resultado.innerText === "0") {
    resultado.innerText = numero;
  } else {
    resultado.innerText = resultado.innerText + numero;
  }
}

function operacion(tipo) {
  let numero1 = Number(document.getElementById("numero-1").value);
  let numero2 = Number(document.getElementById("numero-2").value);

  if (tipo === "suma") {
    valor = numero1 + numero2;
  }

  if (tipo === "resta") {
    valor = numero1 - numero2;
  }
  if (tipo === "multiplicacion") {
    valor = numero1 * numero2;
  }
  if (tipo === "division") {
    valor = numero1 / numero2;
  }
  resultado.innerText = valor;
}

function limpiar() {
  valor = 0;
  resultado.innerText = valor;
  document.getElementById("numero-1").value = 0;
  document.getElementById("numero-2").value = 0;
}
