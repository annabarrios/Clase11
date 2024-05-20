var topping= prompt("Ingrese topping");
var precio=0;
var precio_1=10;
var precio_2=15;
var precio_3=25;
var helado=30;
var precioFinal;
if(topping=="oreo"){
    console.log("el precio es de:" +"$"+precio_1);
}else if(topping=="kitkat"){
    console.log("elprecio es de:" +"$"+precio_2);
}else if(topping=="kinder"){
    console.log("el precio es de:" +"$"+precio_3);
}else{
    alert("No tenemos ese topping")
}

var precioFinal=helado+precio
var precioFinal_1=helado+precio_1;
var precioFinal_2=helado+precio_2;
var precioFinal_3=helado+precio_3;

switch (topping) {
    case "oreo":
        alert("el helado cuesta:" +"$"+precioFinal_1)
        break;
    case "kitkat":
        alert("el helado cuesta:" +"$"+precioFinal_2)
        break;
    case "kinder":
        alert("el helado cuesta:" +"$"+precioFinal_3)
        break;
    default:
        alert("el helado sin topping cuesta:" +"$"+precioFinal)
        break;
}