if (innerWidth <= 678){
    console.log('test');
}
const desc = document.querySelector('.header__desc');
const img = document.querySelector('.header__img');
const username = document.querySelector('.main__contact-username');
const main = document.querySelector('.main');
const padding70 = document.querySelectorAll('.py-70, .px-70');


img.parentNode.insertBefore(desc, img.nextSibling);
img.parentNode.insertBefore(username, img.nextSibling);
/*if(main.className.contains("flex")) */
main.classList.remove("flex");
padding70.forEach(element =>{
    element.classList.remove('py-70', 'px-70');
    element.classList.add('px-30', 'px-30');
})