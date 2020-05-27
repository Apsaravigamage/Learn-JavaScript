 // if _else conditions
 var age = prompt('Ehat is your age?');
 if((age>=18)&&(age<=36)){
     status='Target Demo';
     console.log(status);

 } else{
     status='Not My Audience';
     console.log(status);
 }

 //switch statements
switch(6) {
    case 0:
        text= 'weekend';
        break;
    case 5:
        text= 'weekend';
        break;
    case 6:
        text= 'weekend';
        break;
    
    default:
        text= 'weekday'
}
console.log(text);