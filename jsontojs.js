states = '{ "states": ['+
      '{"name": "Alabama","abbreviation": "AL"},' +
      '{"name": "Alaska","abbreviation": "AK"},'+
      '{"name": "Arizona","abbreviation": "AZ"},'+
      '{"name": "Arkansas","abbreviation": "AR"},'+
      '{"name": "California","abbreviation": "CA"}]}';


let obj= JSON.parse(states); //Convert JSON into JS object

//Accessing and retrieving JSON data through JS object
let statename = obj.states[1].name
let abb = obj.states[1].abbreviation
console.log(statename);
console.log(statename+"    "+abb);


// if there is multiple layer of key value date in JSON
//console.log(obj["address"].streetAddress);
//console.log(obj.address.streetAddress); 

// If multiple data for one field is present for example number in field phoneNumber 
//console.log(obj.phoneNumber[0].number)