const cabeçalho = document.querySelector('header');

/**
 * Passo a Passo
 * 
 * 1º Passo: Capturar o valor da textarea para criar o tweet;
 * 2º Passo: Construir o tweet;
 * 3º Passo: Imprimir esse tweet;
 */

 const textarea = document.querySelector('textarea');
 const tweetar = document.querySelector('button');
 const feed = document.querySelector(".conteudoPrincipal__listaTweets")
 
 /** CAPTURAR O TWEET */

 function pegarTweet(event) {
     event.preventDefault();
 
     const tweetTextarea = textarea.value;
     criarTweet(tweetTextarea)
 }
 
 tweetar.addEventListener('click', pegarTweet);

 /** CRIAR O TWEET */

 function criarTweet(tweetTexto){

    let data = new Date();
    let hora    = data.getHours();
    let minutos = data.getMinutes();

    const tweet = {
        nome: "Samurai",
        foto: "./assets/img/ProfilePic.png"
        usuário: "@brandaomalvadao"
        texto: tweetTexto
        tempo: `${hora}:${minutos}`
    }


    listarTemplateTweet(tweet)
 }

 function listarTemplateTweet(tweet){

    const {nome,foto,usuário,texto,tempo} = tweet

/** CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE */

    let li    = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet")
    let img   = document.createElement("img");
    img.src = foto
    img.classList.add("tweet__fotoPerfil")

    let div   = document.createElement("div");
    div.classList.add("tweet__conteudo")
    let h2    = document.createElement("h2");
    h2.innerText = nome

    let span  = document.createElement("span");
    span.innerText = ` ${usuario} - ${tempo}`

    let p     = document.createElement("p");
    p.innerText = texto

/** ADICIONANDO ELEMENTOS DENTRO DA DIV */

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

/** ADICIONANDO ELEMENTOS DENTRO DO LI */

    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li)
    textarea.value = ""
 }