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

function finalArray([yourScore, computerScore]){
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
}  