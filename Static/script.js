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
 function genetateCat(){
     var image = document.createElement('img');
     var div = document.getElementById('flex-cat-gen');
     image.src ="download.jpg";
     div,appendChild(image);
 }