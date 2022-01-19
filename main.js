
let nome = prompt('Qualè il tuo nome?');
let cognome = prompt('Qualè il tuo cognome?');
let colore = prompt('Qualè il tuo colore preferito?')
var numero = Math.floor(Math.random()*9999);
console.log(numero);


document.getElementById('password').innerHTML = nome + cognome + colore + numero;