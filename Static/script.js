//challenge 1:Your Age in Day
function ageInDays() {
    var birthYear = prompt('What age were you brom....?');
    var ageInDayss =(2020-birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswer = document.createTextNode('You are'+ageInDayss +'Days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();

}

//challenge 2: Cat Generator
 function generateCat(){
     var image = document.createElement('img');
     var div = document.getElementById('flex-cat-gen');
     image.src="download.jpg"
     div.appendChild(image);
 }
  
 //Challenge 3: Rock,Paper,Scissors
 function rpsGame(yourChoice){
     console.log(yourChoice);
     var humanChoice, botChoice ;
     humanChoice = yourChoice.id;

     botChoice = numberToChoice(randToRpsInt());
     console.log('Computer Choice:',botChoice);

     results = decideWinner(humanChoice, botChoice);
     console.log(results);

     message = finalMessage(results);// message :you won
     console.log(message);

     rpsFrontEnd(yourChoice.id, botChoice, message);

 }

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors':1,'rock':0.5,'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1,'scissors':0.5,'rock':0}
    };
    var yourScore=rpsDatabase[yourChoice] [computerChoice];
    var computerScore=rpsDatabase[computerChoice] [yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore===0){
        return{'message':'You Lost', 'color':'red'};

    }else if(yourScore===0.5){
        return{'message':'You tiad', 'color':'yellow'};
    }else{
        return{'message':'You win','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase ={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}  

//challenge 4: change the color of all buttons
 var all_button = document.getElementsByTagName('button');

 var copyAllButtons =[];
 for (let i=0; i< all_button.length; i++){
     copyAllButtons.push(all_button[i].classList[1]);
 }
 console.log(copyAllButtons);

 function buttonColorChange(buttonThingy){
     if(buttonThingy.value ==='red'){
         buttonRed();
     }else if(buttonThingy.value ==='green'){
         buttonGreen();
     }else if (buttonThingy.value ==='reset'){
         buttonColorReset();
     }else if (buttonThingy.value ==='random'){
         randomColors();
     }
 }

 function buttonRed(){
     for (let i=0; i<all_button.length; i++){
         all_button[i].classList.remove(all_button[i].classList[1]);
         all_button[i].classList.add('btn-danger');
     }
 }

 function buttonGreen(){
    for (let i=0; i<all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i=0; i<all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let  choices =['btn-primary','btn-danger','btn-success','btn-warning']
     
    for(let i=0; i<all_button.length; i++){
        let randomNumber = Math.floor(Math.random() *4);
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(choices[randomNumber]);
    }

 
}

// Challenge 5: Blackjack

let BlackjackGame = {
    'you':{'scoreSpan':'#your-blackjack-result','div': '#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
};

const YOU=BlackjackGame['you']
const DEALER=BlackjackGame['dealer']

const hitSound = new Audio('sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackhit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


function blackjackhit() {
   showCard(YOU); 
}

function showCard(activePlayer){
   let cardImage =document.createElement('img');
   cardImage.src='images/Q.png';
   document.querySelector(activePlayer['div']).appendChild(cardImage);
   hitSound.play();
}

function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
   
    for (i=0; i<yourImages.length; i++){
        yourImages[i].remove();
    }

    for (i=0; i<dealerImages.length; i++){
        dealerImages[i].remove();
    }
}