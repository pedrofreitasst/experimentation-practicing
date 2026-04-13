// const para = document.querySelector('.erro');//vai de cima para baixo e pega a primeira tag <p> que encontra, ignorando o resto. e se quando tento pegar a em relação a class, se pode escolher qualquer nome desde que se referencie exatamente como está no HTML, .erro pega a primeira classe .erro porém você pode adicionar outros parametros para a busca como "div.erro" vulgo o tipo de tag+ classe para ir em uma especifica, no navegador você pode selecionar um elemento inspecionando e copiar o seletor para facilitar.

// console.log(para);

// const paras = document.querySelectorAll('p');// seleciona todos os elementos com a tag p

// paras.forEach(param => {console.log(param)}); //vai passando por cada um e mostrando em lista no console. 

// const erros = document.querySelectorAll('.erro');//selecionando todos os elementos da classe .erro

// erros.forEach(errors =>{console.log(errors)});//mesma coisa do primeiro foreach porém passando por todos da classe .erro

// //console.log(paras[1]);//define qual p quer "mostrar"

// //pegar elemento por ID

// const titulo = document.getElementById('header2dapagina');
// console.log(titulo);

// //pegar elemento pelo nome da classe

// const errorz = document.getElementsByClassName('erro');
// console.log(errorz);
// console.log(errorz[0]); //da para puxar um especifico porém por ser uma coleção e não uma liste ade nodes não da para usar forEach

// //pegar elemento pelo nome da tag

// const pelatag = document.getElementsByTagName('div');
// console.log(pelatag);

// const p1 = document.querySelector('p');

// p1.innerText += 'mudandotexto3';//muda o texto de um elemento especifico html =+ adiciona a mudança de texto logo após o texto original.


// const paras = document.querySelectorAll('p'); //seleciona todos os elementos com a tag p e "guarda" no para

// paras.forEach(para=> { //pega cada elemento dentro do paras(chamando de para), demonstra o texto interno adicionando o texto pelo += logo em seguida
//     console.log(para.innerText);
//     para.innerText+= ' Texto Adicional';


// })

// const conteudo = document.querySelector('.conteudo');

// //console.log(conteudo.innerhtml);
// //conteudo.innerHTML+= '<h2>teste</h2>'

// const pessoas = ['pedro','clara','vincenzo']; //cria um array com algumas pessoas

// pessoas.forEach(pessoa =>{ //pega para cada elemento dentro de pessoas(chamado pessoa)
//     conteudo.innerHTML += `<p>${pessoa}</p>`//imprime um elemento do array por vez por string template

// });


// const link = document.querySelector('a');//armazena o conteudo do primeiro elemento com a tag "a" e armazena na constante "link"

// console.log(link.getAttribute('href'));//joga para o console o conteudo do elemento href da tag a

// link.setAttribute('href','https://www.google.com');//troca o conteudo do link
// link.innerText = 'Google';//troca o titulo do link

// const mssg = document.querySelector('p');//seleciona o primeiro p e armazena em mssg

// // console.log(mssg.getAttribute('class'));//pega o atributo class
// // mssg.setAttribute('class', 'sucesso');// modifica o atributo class para sucesso
// // mssg.setAttribute('style', 'color:green')//modifica o atributo style para a cor verde

// const header = document.querySelector('h1');
// console.log(header.style);

// header.style.backgroundColor = 'black';

// const conteudo = document.querySelector('p');
// conteudo.style.backgroundColor = 'black';
// console.log(conteudo.classList);

// conteudo.classList.remove('p2');

// conteudo.classList.add('p3');

const lorem = document.querySelectorAll('p');
    lorem.forEach(loren =>{

        if(loren.textContent.includes('error')){
            loren.classList.add('p2');

        } 
            
            if (loren.textContent.includes('success')){ loren.classList.add('p3');
            
         }
            
        
        
        
        
        //console.log(loren.textContent);
        

});


//"togglar" uma classe adiciona uma classe, não substitui

