class Student{

    // setDetails(sid,sname,grade){
    //     this.sid=sid;
    //     this.sname=sname
    //     this.grade=grade
    // }

    //Calling class constructor
    constructor(sid,sname,grade){
        this.sid=sid;
        this.sname=sname
        this.grade=grade
    }

    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }

}

    let stu = new Student(101,"John","A"); //Add arguments to object when constructor is called
    //stu.setDetails(200,"Darkseid", "A");
    stu.display();


