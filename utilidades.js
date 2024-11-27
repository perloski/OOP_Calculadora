const prompt = require ('prompt-sync')();

class Utilidades{
    dividirPorCero= function(num2){
        while (num2==0){
            console.log ("No se puede dividir por 0, ingrese otro número");
            num2=parseFloat(prompt(">"));
        }
        return num2;
    }

    esperarTeclaParaContinuar = function () {
        console.log("\nPresiona cualquier tecla para continuar...");
        prompt("");  
    }

}

module.exports = Utilidades;