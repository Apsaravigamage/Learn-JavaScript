 let student ={
     first: 'Rom',
     Last: 'Bony',
     age: 23,
     height: 150,


     studentInfo:function(){
         return this.first + '\n' + this.Last + '\n'+this.age;
     }
 };

 console.log(student.first);
 console.log(student.Last);
 student.first='NotRom'; // change value
 console.log(student.first);

 student.age++;
 console.log(student.age);

 console.log(student.studentInfo());

  