// BLOQUEIA O EVENTO DE SUBMIT

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResult('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classImc = getClassImc(imc);

    const message = `Seu IMC é ${imc} (${classImc}).`
    
    setResult(message, true);
});

function getClassImc (imc) {
    const classImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return classImc[5];
    }

    if (imc >= 34.9) {
        return classImc[4];
    }

    if (imc >= 29.9) {
        return classImc[3];
    }
    
    if (imc >= 24.9) {
        return classImc[2];
    }
    
    if (imc >= 18.5) {
        return classImc[1];
    }
    
    if (imc < 18.5) {
        return classImc[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function createParagraph() {
    const p = document.createElement('p');
    return p;
}

// ADICIONAR ALGO DENTRO DO RESULTADO

function setResult (message, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = '';


    const p = createParagraph();

    if (isValid) {
        p.classList.add('resultParagraph');
    } else {
        p.classList.add('badResult');
    }

    p.innerHTML = message;
    result.appendChild(p);

}





// function meuIMC() {
//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado');
// }

// form.onsubmit = function (resultadoIMC) {
//     resultadoIMC.preventDefault();
//     const peso = form.querySelector('#peso');
//     const atura = form.querySelector('#atura');
//     const resultado = peso.querySelector('#resultado');
// }

// console.log(resultadoIMC);