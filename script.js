if (innerWidth <= 678){
    console.log('test');
}
const desc = document.querySelector('.header__desc');
const img = document.querySelector('.header__img');
const username = document.querySelector('.main__contact-username');
const main = document.querySelector('.main');

img.parentNode.insertBefore(desc, img.nextSibling);
img.parentNode.insertBefore(username, img.nextSibling);

if(main.className == "flex") main.classList.remove("flex");