
//Define object and its properties
let person=
{
    firstname:"Ishan",
    lastname:"Dhaliwal",
    age:25,
    weight:60,
    basicsal:30000,
    bonus: function() //Method as object property
    {
        return(this.basicsal*10);

    }
}

// Accessing Object properties
console.log(person["firstname"])
console.log(person.weight)

//Add new property to existing object
person["gender"]="Male";
person.height=6.5;

console.log(person["gender"])
console.log(person["height"])

//Update exisiting property

person["age"]=45
console.log(person["age"])

//Remove property from object

delete person["weight"];
console.log(person["weight"]); //undefined because property already deleted

//To read all properties from object

for(let x in person)
{
    console.log(x); // Prints only property names
    console.log(person[x]); //Prints only values
    console.log(x+"   "+person[x]); // Prints name + values
}

console.log(person.bonus()); // accesing object method