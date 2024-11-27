const prompt = require ('prompt-sync')();

class Menus{

    menuInicial= function (){
        console.log("------------------");
        console.log("===Calculadora===");
        console.log("------------------");
        console.log("\nIngrese la operacion que desea realizar");
        console.log("\n[1]. Suma");
        console.log("[2]. Resta");
        console.log("[3]. Multiplicacion");
        console.log("[4]. Division");
        console.log("[0]. Salir\n");
    }

    menuIngresarNumeros = function (num1, num2){
        console.log("Ingrese el primer numero:");
        num1= parseFloat(prompt(">"));
        console.log("Ingrese el segundo numero");
        num2= parseFloat(prompt(">"));
        return [num1, num2];
    }

}

module.exports= Menus;