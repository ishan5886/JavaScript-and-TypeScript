function student(){
    this.name="Ishan"
    this.gender="male"
}

stu1=new student();
console.log(stu1.name);

//Prototype creation

student.prototype.age=35; //this variable/attribute will be accessible to all objects
//stu1.age=35; //adding new class property through object
// age created by stu1 object and can only be accessed by it

console.log(stu1.name,stu1.gender,stu1.age);

stu2=new student();
console.log(stu2.age); //will give value=undefined as age is localised to stu1 object

student.prototype.display=function(){
    console.log(this.name,this.gender,this.age);
}

stu2.display();

