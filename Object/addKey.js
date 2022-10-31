// Create a function called addKey that takes in an object and adds a new key
// name weight and assigns it a value. Return the object.

var animal = {};
var addKey = [{
    key: "KEYA",
    value: "VALUEA"
  },
  {
    key: "KEYB",
    value: "VALUEB"
  }
];

var addKey2 = [{
    key: "KEYC",
    value: "VALUEC"
  }
];

//Add key/value pairs to obj
console.log(addProperty(animal, addKey));

//Add another key/value pair to obj
console.log(addProperty(animal, addKey2));

function addProperty(animal, addKey) {
  for (var key in addKey) {
    animal[addKey[key].key] = addKey[key].value;
  }
  return animal;
}

