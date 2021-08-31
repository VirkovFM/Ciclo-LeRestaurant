
var costoT = 0;


var x=0;
var a1=0;
var b1=0;
var c1=0;

var a2=0;
var b2=0;
var c2=0;


var costa1=30;
var costb1=120;
var costc1=10;

var costa2=15;
var costb2=30;
var costc2=45;



var oPlatillo=""
while(x<1){
    oPlatillo=prompt("Introduce el platillo (coloca la letra entre parentesis)\na) Nachos\nb) Pizza\nc) Tacos");
if(oPlatillo=="a" || oPlatillo=="A"){
    costoT+=costa1;
    a1++;
}
else if(oPlatillo=="b" || oPlatillo=="B"){
    costoT+=costb1;
    b1++;
}
else if(oPlatillo=="c" || oPlatillo=="C"){
    costoT+=costc1;
    c1++;
}
else{
    alert("Favor de escribir una opción valida (a, b ó c)");   
}


var mas=prompt("¿Desea ordenar algo más?\na) Si\nb) No\n(coloca la letra entre parentesis)");
switch (mas){
    case "a":
    case "A":
        x=0;
    break;
    case "b":
    case "B":
        x=1;
        break;
    default: 
    alert("seleccionaste una opción incorrecta o que no se encuentra en el menú");
}
}



x=0;
while(x<1){
var oBebida=prompt("Introduce el tipo de bebida que desea (coloca la letra entre parentesis)\na) Agua Natural\nb) Soda\nc) Cerveza");
//var oBebida= "a";

if(oBebida=="a" || oBebida=="A"){
    costoT+=costa2;
    a2++;
}
else if(oBebida=="b" || oBebida=="B"){
    costoT+=costb2;
    b2++;
}
else if(oBebida=="c" || oBebida=="C"){
    costoT+=costc2;
    c2++;
}
else{
    alert("Favor de escribir una opción valida (a, b ó c)");   
}


var mas=prompt("¿Desea ordenar algo más?\na) Si\nb) No\n(coloca la letra entre parentesis)");
switch (mas){
    case "a":
    case "A":
        x=0;
    break;
    case "b":
    case "B":
        x=1;
        break;
    default: 
    alert("seleccionaste una opción incorrecta o que no se encuentra en el menú");
}
}

document.write('<table border="2"><tr><th>Platillo/Bebida</th><th>Cantidad</th><th>Costo</th></tr><tr><td>Nachos</td><td>',a1,'</td><td>',a1*costa1,'$</td></tr><tr><td>Pizza</td><td>',b1,'</td><td>',b1*costb1,'$</td></tr><tr><td>Tacos</td><td>',c1,'</td><td>',c1*costc1,'$</td></tr><tr><td>Agua natural</td><td>',a2,'</td><td>',a2*costa2,'$</td></tr><tr><td>Soda</td><td>',b2,'</td><td>',b2*costb2,'$</td></tr><tr><td>Cerveza</td><td>',c2,'</td><td>',c2*costc2,'$</td></tr><tr><td><strong>TOTAL</strong></td><td><strong>',a1+a2+b1+b2+c1+c2,'</strong></td><td><strong>',costoT,'</strong>$</td></tr></table>')
//document.write("<n1>ORDEN</n1>:</br></br>Platillo/bebida\nCantidad\nCosto</br>Nachos\t",a1,"\t",(a1*costa1)+"$</br>Pizza\t",b1,"\t",(b1*costb1)+"$</br>Tacos\t",c1,"\t",(c1*costc1)+"$</br></br> <n2>BEBIDAS</n2> </br>Agua natural\t",a2,"\t",(a2*costa2)+"$</br>Soda\t",b2,"\t",(b2*costb2)+"$</br>Cerveza\t",c2,"\t",(c2*costc2)+"$</br>---------------------------------------</br>TOTAL DE COMPRA:",costoT+"$");
