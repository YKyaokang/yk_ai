const addItems = document.querySelector('.add-items'); // form
const itemsList = document.querySelector('.plates'); //列表

function hahah(e) {
    console.log(e.target);
    console.log('sss');
    e.preventDefault();
    
} 

addItems.addEventListener('submit', hahah)