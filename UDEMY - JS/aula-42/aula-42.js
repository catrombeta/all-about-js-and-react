// VERIFIQUE SE A IMAGEM ESTÁ EM MODO PAISAGEM!

function ePaisagem (w, h) {
    if (w > h) return true;
    else return false;
}

// OU NUMA FUNÇÃO MAIS CURTA PODERIA SER ESCRITA ASSIM:

// function ePaisagem (w,h) {
//     return w > h ? true : false;
// }

// MAS NA VIDA REAL UTILIZAREI MUITO ARROW FUNCTION, ENTÃO REESCREVENDO FICARIA ASSIM:

// const ePaisagem = (w, h) => w > h;

console.log(ePaisagem(10, 50));