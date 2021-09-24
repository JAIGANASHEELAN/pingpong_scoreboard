const p1dis= document.querySelector('#p1dis');
const p2dis= document.querySelector('#p2dis');
const resetbut= document.querySelector('#reset');
const p1but= document.querySelector('#p1but');
const p2but= document.querySelector('#p2but');
const winningScoreSelect= document.querySelector('#playto');

p1score=0;
p2score=0;;
isGameOver=false
winingScore=3;
p1but.addEventListener('click', function(){
    if(!isGameOver){
        p1score+=1;
        if(p1score===winingScore)
        {
            isGameOver=true;
            p1dis.classList.add('has-text-success');
            p2dis.classList.add('has-text-danger');
            p1but.disabled= true;
            p2but.disabled=true;
        }
    }
    p1dis.textContent=p1score;

})

p2but.addEventListener('click', function(){
    if(!isGameOver){
        p2score+=1;
        if(p2score===winingScore)
        {
            isGameOver=true;
            p2dis.classList.add('has-text-success');
            p1dis.classList.add('has-text-danger');
            p1but.disabled= true;
            p2but.disabled=true;
        }
    }
    p2dis.textContent=p2score;
})
// update winning score
winningScoreSelect.addEventListener('change', function(){
    winingScore= parseInt(this.value);
    reset();
})

// reset
resetbut.addEventListener('click',reset)

// reset fxn
function reset(){
    p1score=0;
    p2score=0;
    isGameOver= false;
    p1dis.textContent=p1score;
    p2dis.textContent=p2score; 
    p1dis.classList.remove('has-text-success','has-text-danger');
    p2dis.classList.remove('has-text-success','has-text-danger');
    p1but.disabled= false;
    p2but.disabled=false;

}