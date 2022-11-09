// FACTORY FUNCTIONS - RETURN AN OBJECT

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        // GETTER
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // SETTER 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
            // ISSO RETORNA ARRAYS
        },
        fala: function (assunto) { // fala é um método
            return `${this.nome} está ${assunto}.`;
            // this.nome É IGUAL A = p1.nome;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc());
const p2 = criaPessoa('Carol', 'Trombeta', 1.5, 75);
console.log(p2.fala('falando sobre JS'));
console.log('#######');
p1.nomeCompleto = 'Caroline Campos Trombeta';
console.log(p1.nomeCompleto);



// CONSTRUCTOR FUNCTION

// GETTER: coloca um get antes da função para transformar num atributo, como por exemplo antes de imc() poderia transformar em get imc(), assim quando eu chamar ele não preciso colocar p1.imc(), e sim p1.imc

// QUAL A VANTAGEM DE USAR UMA DAS DUAS? VAI CRIAR UM UNIO MODELO E DEPOIS SÓ É PRECISO REPLICAR. BASICAMENTE O REACT KKKKkkkkkk