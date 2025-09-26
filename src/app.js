import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {

 let sustantivos = [" el apocalipsis suculento ", " el covid retroactivo ", "el infinito turbulento ", " mi tercer ojo "];
 let acciones = [" impidió que continuara adelante ", " borró todo mi contenido "," reseteó toda la matrix ", " cambió todos los planes "];
 let evitar = [" y no pude continuar con Java Script ", " y no logré llegar a tiempo ", " y no me acuerdo de nada ", " y no encuentro mi cabeza "];
let cuando = [" antes de la fecha indicada ", " justo cuando lo necesitaba ", " en la mañana de mi cumpleaños ", " el día después de mañana "];
let parte1 = Math.floor(Math.random() * sustantivos.length);
let parte2 = Math.floor(Math.random() * acciones.length);
let parte3 = Math.floor(Math.random() * evitar.length);
let parte4 = Math.floor(Math.random() * cuando.length);
document.querySelector("#excusas").innerHTML = sustantivos[parte1] + acciones[parte2] + evitar[parte3] + cuando [parte4];
};