console.log("Hola Mundo");

var total=0;
var monto=0;
var TotalTxt=document.getElementById("TotalTxt");
var montoTxt=document.getElementById("Monto");
let descrip= " ";
var desc=document.getElementById("desctxt");
var desctxt=document.getElementById("Descripcion");
var i=0;

function calcularTotal(){

    //descrip=desctxt.value;
    //descrip= JSON.parse(descrip);
    //descrip=parseInt(descrip);
    //document.write(descrip);
    console.log(descrip);
    monto=montoTxt.value;
    var valor=monto;
    //desctxt.innerHTML= descrip + ": "+valor;
    //ImprimirTicket(descrip,monto);
    monto=parseInt(monto);
    total=total+monto;
    console.log(total);
    
    TotalTxt.innerHTML="TOTAL : " + total;
    ImprimirTicket(valor);
    }

function ImprimirTicket(valor) {
        descrip=desctxt.value;
        console.log(descrip);
        desc.innerHTML= descrip + ": $"+valor;

}
