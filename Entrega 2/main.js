/*¨calcula cuotas y precio de un producto*/
const precioGuitarra = 5000
const precioPiano = 1000
const interes = 50
let cuotas = 0

let compra = prompt ("¿Que producto desea comprar? Seleccionar: guitarra  o  piano ").toLocaleLowerCase
 if (compra = "guitarra") { 
    let cuotas = parseInt (prompt  ("El precio de la guitarra es de $5.000. ¿En cuantas cuotas quieres pagarlo?") ) 
     let pago = (precioGuitarra / cuotas +(cuotas *interes));
     alert(" El precio de a pagar es de "+ cuotas +" cuotas de $"+ pago +".")
   
    
 }
 else if (compra = "piano") {
   let cuotas = parseInt (prompt ("El precio del piano es de $10.000. ¿En cuantas cuotas quieres pagarlo?"))
   let pago = (precioPiano / cuotas +(cuotas *interes));
   alert(" El precio de a pagar es de "+ cuotas +" cuotas de $"+ pago +".")
 }
 else {
    alert ("ERROR")
 }/*
 const cuotasGuitarra = ((cuotas, precioGuitarra) => precioGuitarra /cuotas +(cuotas * interes))
  alert (" El precio a pagar es de" + cuotasGuitarra +"en " + cuotas)*/

