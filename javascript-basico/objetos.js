// const blogs = [
// {titulo:'sani sanctum', curtidas: 30},
// {titulo:'ondequandoquem', curtidas: 30}

// ];//array de objetos



// console.log(blogs);


let usuario = { //cria um objeto com o nome usuário {}utilizado para dar caracteristicas ao mesmo
    nome: 'pedro',
    idade: 30,
    email: 'pedrofreitasst@gmail.com',
    localizacao: 'rio de janeiro',
    blogs:[{titulo:'sani sanctum', curtidas: 30},
{titulo:'ondequandoquem', curtidas: 30}],//precisa de virgula após cada característica menos na ultima
    login(){
        console.log('o usuário está logado')},
    logout(){console.log('o usuário deslogou')},
    quaisblogs(){ //cria o método "quaisblogs", não pode ser função arrow por cque o "this" seri 
        
        console.log('esse usuário tem esses blogs:');//cria uma frase inicial
        
        this.blogs.forEach(blog => {console.log(blog);//this = contextual, varia dependendo do "local", foreach = para cada "blog", escrever o nome do blog, forEach funciona pois la em cima nos dados do usuário os blogs foram citados como um array
        })
    }
};

console.log(usuario); //imprime as características do objeto no console
console.log(usuario.nome);//imprime só o nome do usuário
usuario.idade = 35;//modifica a característica do usuário registrada no objeto
console.log(usuario.idade);

console.log(usuario['email']); 
usuario['nome'] = 'sani';
console.log(usuario['nome']);

usuario.quaisblogs();


//objetos math

console.log(Math);

const area = 7.3;

console.log(Math.round(area));//arredonda pra baixo se for abaixo de .7, pra cima se for acima de .7
console.log(Math.floor(area));//arredonda para baixo do decimal(mostrando o"valor cheio")
console.log(Math.ceil(area)); //de ceiling, então arredonda para cima
console.log(Math.trunc(area));//deixa só o numero inteiro e tira o decimal

//numeros aleatórios

const random = Math.random(); //math.random gera um numero aleatório

console.log(random);//gera um numero aleatório decimal entre 0 e 1
console.log(Math.round(random*100));//arredonda o numero para numero cheio e multiplicando por 100 cria-se a "regra" do numero ser entre 1 e 100

//tipos primitivos e referenciais

let ponto1 = 50;
let ponto2 = ponto1;

console.log(`Pontos1: ${ponto1}`, `pontos2: ${ponto2}`);

ponto1 = 100;

console.log(`Pontos1: ${ponto1}`, `pontos2: ${ponto2}`);//valores primitivos(numeros, strings, booleans, null, undefined, simbolos) não modificam o segundo se o primeiro for modificado, ou seja, ponto2 copia o ponto 1 e representa o valor no momento que ele foi copiado, e não de forma dinâmica que pode ser atualizada na mudança da variavel, vulgo ele "copia" o valor

usuario1={nome: 'ryo', idade:30};
usuario2=usuario1;

console.log(usuario1, usuario2);

usuario1.idade = 20;
console.log(usuario1, usuario2);//tipo referencial, vulgo não copia o valor mas sim o "ponteiro", então ele "copia" o valor e se atualiza de forma dinâmica se modificada.

