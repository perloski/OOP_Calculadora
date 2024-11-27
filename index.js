const prompt = require ('prompt-sync')();
const Calculadora = require ('./Calculadora');
const Menus = require ('./menus');
const Utilidades = require('./utilidades');

const calculadora = new Calculadora();
const menus = new Menus();
const utilidades = new Utilidades();

function menuPrincipal(){
    
    let option, num1, num2, resultado;


    do{
        menus.menuInicial();
        option= parseInt(prompt("-> "));
        switch (option){
            case 0: console.log("Saliendo . . .");
                break;

            case 1: 
                console.clear();

                console.log(`Usted escogio "SUMA"`);
                [num1, num2]=menus.menuIngresarNumeros(num1, num2);

                resultado = calculadora.sumar(num1, num2);

                console.log(`\nEl resultado de la suma es ${resultado}`);
                utilidades.esperarTeclaParaContinuar();
                break;

            case 2:
                console.clear();
                console.log(`Usted escogio "RESTA"`);
                [num1, num2]=menus.menuIngresarNumeros(num1, num2);

                resultado = calculadora.restar(num1, num2);

                console.log(`\nEl resultado de la resta es ${resultado}`);
                utilidades.esperarTeclaParaContinuar();
                break;

            case 3:
                console.clear();
                console.log(`Usted escogio "MULTIPLICACION"`);
                [num1, num2]=menus.menuIngresarNumeros(num1, num2);

                resultado = calculadora.multiplicar(num1, num2);

                console.log(`\nEl resultado de la multiplicacion es ${resultado}`);
                utilidades.esperarTeclaParaContinuar();
                break;

            case 4:
                console.clear();
                console.log(`Usted escogio "DIVISION"`);
                [num1, num2]=menus.menuIngresarNumeros(num1, num2);
                num2= utilidades.dividirPorCero(num2);
                resultado = calculadora.dividir(num1, num2);
    
                console.log(`\nEl resultado de la division es ${resultado}`);
                utilidades.esperarTeclaParaContinuar();
                break;


                default: console.log("Ingrese un numero del 0 al 4");
                utilidades.esperarTeclaParaContinuar();
                break;
        }
    } while (option!=0);
}

menuPrincipal();
