/*moving some div to moblie version, and changing classlists */
if (innerWidth <= 767){
    const desc = document.querySelector('.header__desc');
    const img = document.querySelector('.header__img');
    const username = document.querySelector('.main__contact-username');
    const main = document.querySelector('.main');
    const padding70 = document.querySelectorAll('.py-70, .px-70');

    main.classList.remove("flex");
    img.parentNode.insertBefore(desc, img.nextSibling);
    img.parentNode.insertBefore(username, img.nextSibling);
    desc.classList.add('py-30');
    padding70.forEach(element =>{
        element.classList.remove('py-70', 'px-70');
        element.classList.add('px-30', 'px-30');
    })
}
/* darkmode */
const darkbtn = document.getElementById("darkbtn");

const toggleDarkMode = () =>{
    document.body.classList.toggle("darkmode");
    // saving value in localstorage
    localStorage.setItem('darkmode', document.body.classList.contains('darkmode')?'darkON':'darkOFF');
};

//listener on darkmodebtn
darkbtn.addEventListener("click", toggleDarkMode);
//reading value from localStorage
const darkmodeS = localStorage['darkmode']

//checking value darkmode, 
if (darkmodeS ==='darkON'){
    toggleDarkMode();
}
