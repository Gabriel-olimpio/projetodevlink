const btn = document.querySelector('#switch');
btn.addEventListener('click', changeMode);

function changeMode() {
    const html = document.documentElement;
    const image = document.querySelector('#profile img');
    html.classList.toggle('light');

    if (html.classList.contains('light')) {
        
        image.setAttribute('src', './assets/avatar-light.png');
        image.setAttribute('alt', 'Imagem do Jorjaum');

    } else {
        image.setAttribute('src', './assets/avatar.png');
        image.setAttribute('alt', 'Imagem do Osmen di Tuairno');
    }

    
    

}