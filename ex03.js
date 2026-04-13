
let nome = prompt("Digite o nome do aluno");

let n1 = +prompt("Digite a primeira nota");
let n2 = +prompt("Digite a primeira nota");
let n3 = +prompt("Digite a primeira nota");

let media = (n1+n2+n3)/3
media = media.toFixed(2)

alert(`A media do ${nome} foi: ${media}`);