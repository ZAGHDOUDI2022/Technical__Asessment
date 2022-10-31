// Create a function called getKeys that takes in the animal object and returns all
// of the key names.


const getKeys1 = (obj) => {
    var animal1 = {
      a: 1,
      b: 2,
      c: 3
    };
    var newArray = [];
  
    for (var key in animal1) {
      newArray.push(key);
    }
  
    return newArray;
  };
  
  getKeys1();
