function fun(){
    alert('This is a function');
}
fun(); 

function greeting(){
    var name = prompt('What is your Name ?');
    var result ='Hello ' + name;
    console.log(result);

}
greeting();

function sumNum(num1, num2){ //Arguments work in function 
    var result= num1+num2;
    console.log(result);

}
sumNum(10,20);