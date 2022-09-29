const button = document.querySelector('#botao-confirma-som')
button.addEventListener('click', function(){
    const audio = document.querySelector('#confirma-som')
    audio.play()
})