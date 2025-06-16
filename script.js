let btnWarenkorp = document.getElementById('btn-warenkorp');
let warenkorp = document.getElementById('warenkorp');
let warenkorpTitle = document.getElementById('warenkorp-title');

function closePopup(){
    warenkorp.style.display = 'none';
}

const width = window.innerWidth;
const height = window.innerHeight;



btnWarenkorp.addEventListener('click', function(){
    warenkorp.style.display = "block";
    warenkorp.classList.add('popup-warenkorp');
    warenkorpTitle.innerHTML = linkTemplateResponsive();
});



