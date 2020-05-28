//challenge 1:Your Age in Day
function ageInDays() {
    var birthYear = prompt('What age were you brom....?');
    var ageInDayss =(2018-birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswer = document.createTextNode('You are'+ageInDayss +'Days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
 
}