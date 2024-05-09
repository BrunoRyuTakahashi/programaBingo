const listaCedulas = document.querySelectorAll(".numero");

var listaSelecionados = [];

function numeroEscolhido(posicao) {
  const numeroAtual = posicao + 1;
  let letra = "";
  console.log(posicao);
  console.log(numeroAtual);
  if (listaSelecionados.indexOf(numeroAtual) >= 0) {
    for (let indice = 0; indice < listaSelecionados.length; indice++) {
      if (listaSelecionados[indice] == numeroAtual) {
        listaSelecionados.splice(indice, numeroAtual);
      }
    }
    listaCedulas[posicao].classList.remove("numeroEscolhido");
  } else {
    listaSelecionados.push(numeroAtual);
    if (numeroAtual >= 1 && numeroAtual <= 15) {
      letra = "B";
    } else if (numeroAtual >= 16 && numeroAtual <= 30) {
      letra = "I";
    } else if (numeroAtual >= 31 && numeroAtual <= 45) {
      letra = "N";
    } else if (numeroAtual >= 46 && numeroAtual <= 60) {
      letra = "G";
    } else {
      letra = "O";
    }
    div_numeroSorteado.innerHTML = `${numeroAtual} ${letra}`;
    listaCedulas[posicao].classList.add("numeroEscolhido");
  }
}

for (let i = 0; i < listaCedulas.length; i++) {
  listaCedulas[i].onclick = function () {
    numeroEscolhido(i);
  };
}

/*

function numeroEscolhido1() {
  if (listaSelecionados.indexOf(1) >= 0) {
    for (i = 0; i < listaSelecionados.length; i++) {
      if (listaSelecionados[i] == 1) {
        listaSelecionados.splice(i, 1);
      }
    }
    um.innerHTML = `
            <div class="numero">
                <span>1</span>
                </div>
                `;
  } else {
    listaSelecionados.push(1);
    um.innerHTML = `
            <div class="numero numeroEscolhido">
                <span>1</span>
            </div>
            `;
    div_numeroSorteado.innerHTML = `1 B`;
  }
}

*/
