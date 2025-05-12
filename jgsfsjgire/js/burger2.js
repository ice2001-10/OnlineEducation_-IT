var burger_but_open = document.getElementById('burger_b_open'); 
var burger_but_close = document.getElementById('burger_b_close');
var i = 0

if (i==0) {
    burger_but_open.addEventListener('click', burgernav); 
    i=1;
}
else {
    if (i==1) {
        burger_but_open.addEventListener('click', returner);
        i=0;
    }
}


function burgernav() {
    burger_but_open.classList.add('hidden'); 
    burger_but_close.classList.remove('hidden');
    burger__nav.classList.remove('hidden');
}

function returner () {
    burger_but_close.classList.add('hidden');
    burger_but_open.classList.remove('hidden');
    burger__nav.classList.add('hidden');
}
