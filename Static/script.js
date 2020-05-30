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
     console.log(yourChoice)
     var humanChoice, botChoice ;
    // humanChoice=yourChoice.id
    // botChoice=numberToChoice(randToRpsInt());
     //result= decideWinner(humanChoice, botChoice);
     //message= finalMessage(result);// message :you won
     rpsFrontEnd(yourChoice.id, botChoice,message);

 }

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    
}