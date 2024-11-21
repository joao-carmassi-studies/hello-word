// Vars -----
const alphabet =
  " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.,;:àáâãäåèéêëìíîïðòóôõö÷øùúûüýÿÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÒÓÔÕÖ×ØÙÚÛÜÝ@#$%^&*()-_=+[]{}|\\`~\"'<>\n\r\t";
const listaDeLetras = alphabet.split("");
let criandoFrase = [];
let x = 0;
let y = 0;
const titulo = document.querySelector("h1");
const span = document.querySelector("div>span");
const btn = document.querySelector("button");
let frase;
let fraseSeparada;
let velocidade;
let intervalo;

// Código -----
btn.addEventListener("click", () => {
  frase = document.getElementById("inputFrase").value;
  velocidade = document.getElementById("inputIntervalo").value;
  if (frase != "" && velocidade != "") {
    fraseSeparada = frase.split("");
    span.innerHTML = "";
    intervalo = setInterval(montaFrase, velocidade);
  } else {
    alert("Não deixe os inputs vazios");
  }
});

function montaFrase() {
  if (criandoFrase.length !== fraseSeparada.length) {
    let gerandoFrase = `${criandoFrase.join("")}${listaDeLetras[y]}`;
    exibeFrase(gerandoFrase);

    if (listaDeLetras[y] === fraseSeparada[x]) {
      criandoFrase.push(listaDeLetras[y]);
      x++;
      y = 0;
    } else {
      y++;
    }
  } else {
    clearInterval(intervalo);
  }
}

function exibeFrase(fraseNova) {
  if (span.firstChild) {
    const p = document.createElement("p");
    p.textContent = fraseNova;
    span.appendChild(p);
    p.scrollIntoView();
  } else {
    document.querySelector("div").style.backgroundColor = "black";
    span.classList.add("painelPreto");
    span.innerHTML = `
    <p>Microsoft Windows [versão 10.0.22631.4169]</p>
    <p>(c) Microsoft Corporation. Todos os direitos reservados.</p>
    `;
  }
}
