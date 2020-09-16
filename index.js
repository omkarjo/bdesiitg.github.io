const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

var arrayOfCards = document.querySelectorAll('.card');
console.log(arrayOfCards);

ux.addEventListener('click', () => {
    for(var i = 0; i < arrayOfCards.length; i++){
        var loc = arrayOfCards[i];
        var y = loc.querySelector('.badge-ux');
        if (!y){
            loc.classList.add('hidden');
        }
        else if(y && loc.classList.contains('hidden')){
            loc.classList.remove('hidden');
        }
    }
    
})

visual.addEventListener('click', () => {
    for(var i = 0; i < arrayOfCards.length; i++){
        var loc = arrayOfCards[i];
        var y = loc.querySelector('.badge-visual');
        if (!y){
            loc.classList.add('hidden');
        }
        else if(y && loc.classList.contains('hidden')){
            loc.classList.remove('hidden');
        }
    }
    
})

industrial.addEventListener('click', () => {
    for(var i = 0; i < arrayOfCards.length; i++){
        var loc = arrayOfCards[i];
        var y = loc.querySelector('.badge-industrial');
        if (!y){
            loc.classList.add('hidden');
        }
        else if(y && loc.classList.contains('hidden')){
            loc.classList.remove('hidden');
        }
    }
    
})

all.addEventListener('click', () => {
    for(var i = 0; i < arrayOfCards.length; i++){
        arrayOfCards[i].classList.remove('hidden');
    }
})



function allFill () {
    all.classList.add('text-blue-900');
}

all.addEventListener('click', () => {
    if (!(all.classList.contains('text-blue-900'))){
        all.classList.add('text-blue-900');
    }
    if (ux.classList.contains('text-blue-900')) {
        ux.classList.remove('text-blue-900');
    }
    if (visual.classList.contains('text-blue-900')) {
        visual.classList.remove('text-blue-900');
    }
    if (industrial.classList.contains('text-blue-900')) {
        industrial.classList.remove('text-blue-900');
    }
})

ux.addEventListener('click', () => {
    if (!(ux.classList.contains('text-blue-900'))){
        ux.classList.add('text-blue-900');
    }
    if (all.classList.contains('text-blue-900')) {
        all.classList.remove('text-blue-900');
    }
    if (visual.classList.contains('text-blue-900')) {
        visual.classList.remove('text-blue-900');
    }
    if (industrial.classList.contains('text-blue-900')) {
        industrial.classList.remove('text-blue-900');
    }
})

visual.addEventListener('click', () => {
    if (!(visual.classList.contains('text-blue-900'))){
        visual.classList.add('text-blue-900');
    }
    if (all.classList.contains('text-blue-900')) {
        all.classList.remove('text-blue-900');
    }
    if (ux.classList.contains('text-blue-900')) {
        ux.classList.remove('text-blue-900');
    }
    if (industrial.classList.contains('text-blue-900')) {
        industrial.classList.remove('text-blue-900');
    }
})

industrial.addEventListener('click', () => {
    if (!(industrial.classList.contains('text-blue-900'))){
        industrial.classList.add('text-blue-900');
    }
    if (all.classList.contains('text-blue-900')) {
        all.classList.remove('text-blue-900');
    }
    if (visual.classList.contains('text-blue-900')) {
        visual.classList.remove('text-blue-900');
    }
    if (ux.classList.contains('text-blue-900')) {
        ux.classList.remove('text-blue-900');
    }
})