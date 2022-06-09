//Changing logo picture to GIF version

let logoGif = document.querySelector('.logoPic');

logoGif.addEventListener('click', function() {
    logoGif.setAttribute('src', './photos/Vanessa Vun logo.gif');
    setTimeout(() => {
        logoGif.setAttribute('src', './photos/logo.png');
    }, 2000)
})

let profilePic = document.querySelector('.vanessaPic');

profilePic.addEventListener('click', function(){
    profilePic.setAttribute('src', './photos/climbing.jpg');
    setTimeout(() => {
        profilePic.setAttribute('src', './photos/vanessa.jpg');
    }, 2000)
})