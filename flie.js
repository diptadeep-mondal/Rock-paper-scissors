let matchScore= {
        win:0,
        lose:0,
        tie:0
    };
    
    //JSON.parse(localStorage.getItem('matchScore'));

let ans;
function playGame(userMove){
    let user=Math.random();
    if(user<=0.3)
    {
     ans='rock';
    }
    else if(user>0.3 && user<=0.7){
     ans='paper';
    }
    else{
     ans='scissors';
    }
let result;
   if(userMove==='rock'){

    if(ans==='rock'){
    result='that\'s a tie';
   }
   else if(ans==='paper'){
    result='you lose';
   }
   else{
    result='you win';
   }

  
   }


   if(userMove==='paper'){
  //  computerMove();
   if(ans==='rock'){
    
    result='you win';
   }
   else if(ans==='paper'){
    result='that\'s a tie';
    
   }
   else{
    result='you lose';
    
   }

  
   }

   if(userMove==='scissors'){
     // computerMove();
     
     if(ans==='rock'){
     
      result='you lose';
     }
     else if(ans==='paper'){
     
      result='you win';
     }
     else{
      result='that\'s a tie';
     }
  
     
     }


   if(result==='you win'){
matchScore.win++;
}
else if(result==='you lose'){
matchScore.lose++;
}
else{
matchScore.tie++;
}

//localStorage.setItem ('matchScore',JSON.stringify(matchScore));

document.querySelector('.score').innerHTML=`win: ${matchScore.win} lose: ${matchScore.lose} tie: ${matchScore.tie}`;

document.querySelector('.result').innerHTML=`${result}`;
document.querySelector('.moves').innerHTML=` you<img class="icon" src="imgforgame/${userMove}-emoji.png" alt=""><img class="icon" src="imgforgame/${ans}-emoji.png" alt="">computer`;
}

document.querySelector('body').addEventListener('keydown',
(event)=>{
   if(event.key==='r'){
      playGame('rock');
   }
   else if(event.key==='p'){
      playGame('paper');
   }
   else if(event.key==='s'){
      playGame('scissors');
   }
}
);

