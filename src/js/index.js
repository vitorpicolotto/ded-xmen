//Objetivo 1 - quando passar o mouse em cima do personagem na lista, devemos selecioná-lo
//Passo 1: pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

//Passo 2: adicionar a classe selecionada no personagem quando o usuário passar o cursor

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth<450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);
        
        alterarNomePersonagemSelecionado(personagem); 

        alterarDescricaoPersonagemSelecionado(personagem);

    })
})



function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersongem = document.getElementById('descricao-personagem');
    descricaoPersongem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

