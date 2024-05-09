let butik = document.querySelector('#butik')
let kitcen = document.querySelector('.kitcen-flex')
let more = document.querySelector('#more')
let mor = document.querySelector('#mor')
let omg = document.querySelector('.omg')
let omg1 = document.querySelector('.omg1')
let a = 0
console.log(mor);
console.log(more);
function openmenu(){
    if (kitcen.style.height == '550px'){
        kitcen.style.height = '265px'
        butik.style.backgroundColor = '#D5621D'
        butik.innerText = 'ВСЕ МЕНЮ'
    }else{
        kitcen.style.height = '550px'
        butik.innerText = 'СКРЫТЬ МЕНЮ'
        butik.style.backgroundColor = 'grey'
    }
    a += 1
    if(a == 5){
        butik.removeEventListener('click',openmenu)
    }
}

butik.addEventListener('click',openmenu)
let s = 0
function moree(){
    if(omg1.style.height == '500px'){
        omg1.style.height = '376px'
    }else{
        omg1.style.height = '500px'
    }
    s += 1
    if(s == 5){
        mor.removeEventListener('click',moree)
    }
}  

mor.addEventListener('click',moree)

let c = 0

function moro(){
    if(omg.style.height == '500px'){
        omg.style.height = '376px'
    }else{
        omg.style.height = '500px'
    }
    c += 1
    if(c == 5){
        more.removeEventListener('click',moro)
    }
}

more.addEventListener('click',moro)
