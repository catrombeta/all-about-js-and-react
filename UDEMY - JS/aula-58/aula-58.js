// CONSTRUCTOR FUNCTION - RETURN OBJECTS
// Na função construtora a gente precisa sempre iniciar o seu nome com letra maiúscula. Precisamos OBRIGATORIAMENTE utlizar a palavra (new).

// FABRIC - novaPessoa () {}
// CONSTRUCTOR - Pessoa (new) {}

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.metodo = () => {
        console.log(this.nome + ": sou um método");
    };
}

const pessoa1 = new Pessoa('Luiz', 'Otávio');
const pessoa2 = new Pessoa('Carol', 'Trombeta');
pessoa2.metodo();
// a palavra new cria um novo objeto vazio, faz o this apontar para o objeto fazio e retorna esse objeto e ela retorna automaticamente! Não precisa colocar return