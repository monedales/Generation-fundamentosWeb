// declaração de variáveis

var nome = "moneda"; // var global e modelo antigo, pode ser redeclarada e modificada

let nome2 = "moneda"; //  var global/local, dependendo de onde é declarada..pode ser modificada mas nao pode ser redeclarada
// let it change - campo de nome(precisa mudar quando a pessoa digitar o nome)
const nome3 = "moneda"; // declaração que nunca vai mudar
// vai ser muito usado dentro do react

document.getElementById("botao") //pega o primeiro elemento encontrado com o ID
document.getElementsByClassName("botao") //pega todos os elementos com a mesma classe
document.getElementsByTagName("p")//pega todos os elementos de paragrafo
document.querySelector("#botao")// pega o primeiro elemento / pode ser usado em busca por id = "#elemento" / por classe ".elemento" ou por nome "elemento"
document.querySelectorAll(".botao") // pega todos os elementos com a classe ou nome ou id


function topo()
{
    window.scrollTo(0,0);
}
