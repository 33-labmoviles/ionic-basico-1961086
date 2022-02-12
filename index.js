console.log("Hola Mundo");

var total=0;
var monto=0;
var TotalTxt=document.getElementById("TotalTxt");
var montoTxt=document.getElementById("Monto");

function calcularTotal(){

    monto=montoTxt.value;
    monto=parseInt(monto);
    total=total+monto;
    console.log(total);

    TotalTxt.innerHTML="TOTAL : " + total;
}
