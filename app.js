const select = document.querySelector('#numberSelect');
const p1add = document.querySelector('#p1add');
const p2add = document.querySelector('#p2add');
const reset = document.querySelector('#reset');
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const numberSelected= document.querySelector('#numberSelect')
let p1counter=0;
let p2counter=0; 

for(let i=5; i<=21 ; i++){
    const option = document.createElement('option');
    option.value=i;
    option.textContent=i;
    select.appendChild(option);
}

let goal =select.value;

p1add.addEventListener('click' , function(){
    p1score.textContent= `${++p1counter}`
    if (p1counter==goal){
        p1add.disabled=true;
        p2add.disabled=true;
        p1score.style.color='green'
        p2score.style.color='red'
    }
} )

p2add.addEventListener('click' , function(){
    p2score.textContent= `${++p2counter}`
    if (p2counter==goal){
        p1add.disabled=true;
        p2add.disabled=true;
        p2score.style.color='green'
        p1score.style.color='red'
    }
} )

reset.addEventListener('click' ,function(){
    p1add.disabled=false;
    p2add.disabled=false;
    p2score.style.color='black'
    p1score.style.color='black'
    p1counter=0;
    p2counter=0;
    p1score.textContent='0';
    p2score.textContent='0';
})

numberSelected.addEventListener('input',function(){
    goal= numberSelected.value;
})



