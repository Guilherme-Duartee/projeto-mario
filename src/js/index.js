/*

OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir o modal co  o video do trailer

OBJETIVO 2 - quanto o usuário clicar no xX devemos fechar a modal


OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir o modal co  o video do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento na modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quanto o usuário clicar no xX devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X
    -passo 3 - fechar a modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});
