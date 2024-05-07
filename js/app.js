const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');

btnLimpiar.addEventListener('click', function btnLimpiar(){

    document.getElementById('peso'). value =""
    document.getElementById('altura'). value = ""
    document.getElementById('resultado').value = ""
});

btnCalcular.addEventListener('click',function calcular(){

let peso = document.getElementById('peso'). value ;
let altura = document.getElementById('altura'). value ;
let imc = peso/(altura*altura);
document.getElementById('resultado').value = imc.toFixed(1);
}
);

//practica II//
const btnCalcular2 = document.getElementById('btnCalcular2');
const btnLimpiar2 = document.getElementById('btnLimpiar2');


btnCalcular2.addEventListener('click', function calcular(){
    const option = document.getElementById('idOpcion'). value;
    const idNumero1 = document.getElementById('idNumero1'). value;
    const idNumero2 = document.getElementById('idNumero2'). value;
    const txtres = document.getElementById('idResultado');

    let res = 0;
    let num1 = parseInt(idNumero1);
    let num2 = parseInt(idNumero2);
    let opc = parseInt(option);

    switch(opc) {        
        case 1: res = num1+num2;break;
        case 2: res = num1-num2;break;
        case 3: res = num1*num2;break;
        case 4: res = num1/num2;break;        
    }
    txtres.value = res;
});

btnLimpiar2.addEventListener('click', function limpiar(){
    document.getElementById('idResultado'). value = '';
    document.getElementById('idNumero1'). value = '';
    document.getElementById('idNumero2'). value = '';
});