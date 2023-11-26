
//1.for given json iterate over all for loops .
console.log("-------------------for in loop--------------");

var person = {
    "name" : "Rakesh",
    "age"  :  "25",
    "Gender": "Male"
}

for (var a in person){
    console.log(a, person[a])
}

console.log("-------------for loop------------------------");


var person1 = {
    "name" : "Rakesh raki",
    "age"  :  "25",
    "Gender": "Male"
}
var keys = Object.keys(person1);
  
  // Iterate through JSON array using a for loop
  for (let i = 0; i < keys.length; i++) {
    var key = keys[i];
  let value = person1[key];
  console.log(` ${key} : ${value}`);
  }
console.log("------------------for of-----------------------");

var person1 = {
    "name": "Rakesh raki",
    "age": "25",
    "Gender": "Male"
  }
  
  
  for (let [key, value] of Object.entries(person1)) {
    console.log(` ${key} : ${value}`);
  }

console.log("--------------------------for each----------------------");

var person1 = {
    "name": "Rakesh raki",
    "age": "25",
    "Gender": "Male"
  };
  
  
  Object.entries(person1).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
  });