/*
// declaração de variáveis
var nome = "moneda"; // var global e modelo antigo, pode ser redeclarada e modificada

let nome2 = "moneda"; //  var global/local, dependendo de onde é declarada..pode ser modificada mas nao pode ser redeclarada
// let it change - campo de nome(precisa mudar quando a pessoa digitar o nome)
const nome3 = "moneda"; // declaração que nunca vai mudar
// vai ser muito usado dentro do react

document.getElementById("botao") //pega o primeiro elemento encontrado com o ID
document.getElementsByClassName("botao") //pega todos os elementos com a mesma classe
document.getElementsByTagName("p")//pega todos os elementos de paragrafo
(melhor prática)document.querySelector("#botao")// pega o primeiro elemento / pode ser usado em busca por id = "#elemento" / por classe ".elemento" ou por nome "elemento"
document.querySelectorAll(".botao") // pega todos os elementos com a classe ou nome ou id
*/

function topo() {
    window.scrollTo(0, 0);
}

let nome = window.document.getElementById("nome");
let email = document.querySelector("input#email");
let assunto = document.querySelector("#assunto"); // sem o input tbm funciona
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa");

nome.style.width = "100%";
email.style.width = "100%";
celular.style.width = "100%";

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido, humano!"
        txtNome.style.color = "#a13e3e"
    } else {
        txtNome.innerHTML = "Tudo certo! :)"
        txtNome.style.color = "#ffbd59"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Isso não é um e-mail válido, humano!"
        txtEmail.style.color = "#a13e3e"
    } else {
        txtEmail.innerHTML = "Tudo certo! :)"
        txtEmail.style.color = "#ffbd59"
        emailOk =true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar()
{
    if (nomeOk == true && emailOk == true )
    {
        alert("tá enviado, queride!")
    } else
    {
        alert("preencha todos os campos!")
    }
}

function mapaZoom()
{
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal()
{
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}