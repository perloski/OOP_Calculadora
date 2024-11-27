class Calculadora{
    sumar (num1,num2){
        let resultado;
        resultado= num1+num2;
        return resultado;
    }

    restar(num1,num2){
        let resultado;
        resultado=num1-num2;
        return resultado;
    }

    multiplicar(num1, num2){
        let resultado;
        resultado=num1*num2;
        return resultado;
    }

    dividir (num1, num2){
        let resultado;
        resultado=num1/num2;
        return resultado;
    }
}

module.exports = Calculadora;