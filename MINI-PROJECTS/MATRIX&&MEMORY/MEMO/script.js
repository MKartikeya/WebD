class MixorMatch{
    constructor(totalTime,cards){
        this.cardArray=cards;
        this.totalTime=totalTime;
        this.timeReamaining=totalTime;
        this.timer=document.getElementById('time-remaining');
        this.ticker=document.getElementById('flips');
    }
    startGame(){
        this.cardToCheck=null;
        this.totalClicks=0;
        this.timeReamaining=this.totalTime
        this.matchedCards=[];
        this.busy=true;
        setTimeout(()=>{
           this.shuffleCard();
           this.countdown=this.startCountdown();
           this.busy=false;
        },500)
        this.hideCards();
        this.timer.innerText=this.timeReamaining;
        this.ticker.innerText=this.totalClicks;
        // this.shuffleCard();
    }
    hideCards(){
        this.cardArray.forEach(card=>{
            card.classList.remove('visible');
            card.classList.remove('matched')
        });
    }
    isFlip(card){
        return true
        return (!this.busy && !this.matchedCards.includes(card) && card!==this.cardToCheck);
    }
    flipCard(card){
        if(this.isFlip(card)){
            this.totalClicks++;
            this.ticker.innerText=this.totalClicks;
            card.classList.add('visible')
            if(this.cardToCheck){
                this.checkForMatch(card);
            }
            //check to match
            else{
                this.cardToCheck=card;
            }
        }
    }
    checkForMatch(card){
         if(this.getCardType(card)===this.getCardType(this.cardToCheck)){
            this.cardMatch(card,this.cardToCheck);
         }
         else this.cardMisMatch(card,this.cardToCheck)
         this.cardToCheck=null;
        }
    cardMatch(card1,card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched')
        card2.classList.add('matched')
        if(this.matchedCards.length===this.cardArray.length){
            setTimeout(this.victory(),500)
            // this.victory()
        }
    }
    cardMisMatch(card1,card2){
        this.busy=true;
        setTimeout(()=>{
            card1.classList.remove('visible');
            card2.classList.remove('visible')
            this.busy=false
        },1000)
    }
    getCardType(card){
        return card.getElementsByClassName('card-value')[0].src;
    }
    startCountdown(){
        return setInterval(()=>{
            this.timeReamaining--;
            this.timer.innerText=this.timeReamaining;
            if(this.timeReamaining===0){
                this.gameOver()
            }
        },1000)
    }
    gameOver(){
        clearInterval(this.countdown);
        document.getElementById('game-over-text').classList.add('visible');
    }
    victory(){
        clearInterval(this.countdown);
        document.getElementById('victory-text').classList.add('visible');

    }
    shuffleCard(){
        for(let i=this.cardArray.length-1;i>0;i--){
            let randIndex= Math.floor(Math.random()*(this.cardArray.length-i-1));
            this.cardArray[randIndex].style.order=i;
            this.cardArray[i].style.order=randIndex;
        }
    }
}


function ready(){
    let overlays=Array.from(document.getElementsByClassName('overlay-text'));
    let cards=Array.from(document.getElementsByClassName('card'));
    let game= new MixorMatch(100,cards)
    // cards[2].style.order=1;
    // cards[6].style.order=5;
    // for (let i=cards.length-1;i>0;i--){
    //     let randIndex= Math.floor(Math.random()*(i+1));
    //     cards[randIndex].style.order=i;
    //     cards[i].style.order=randIndex;
    // }
    overlays.forEach(overlay=>{
        overlay.addEventListener('click',()=>{
            overlay.classList.remove('visible');
            game.startGame();
        })
    })
    cards.forEach(card=>{
        card.addEventListener('click',()=>{
            // card.classList.add('visible');
            game.flipCard(card);
        })
    })
}
if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',ready());
}
else{
    ready();
}