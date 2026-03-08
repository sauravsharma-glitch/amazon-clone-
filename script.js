const imgs = document.querySelectorAll('.header-slider ul img ');
const prev_btn = document.querySelector('control_prev');
const prev_next = document.querySelector('control_next');

let n=0;

function changeSlide(){
    for (let i=0 ; 1<imgs.length;i++){
        imgs[i].style.display='none';}
        imgs[n].style.display='block';
    }
    changeSlide();

prev_btn.addEventlistener('click',(e)=>{
    if(n>0){
        n--;}
    else{
        n= imgs.length -1; 
    } changeSlide();
})
next_btn.addEventlistener('click',(e)=>{
    if(n<imgs.length -1){
        n++;}
    else{
        n= 0; 
    } changeSlide();
})