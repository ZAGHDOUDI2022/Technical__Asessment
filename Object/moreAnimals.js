// Create an array called moreAnimals of 3 objects of 3 different animals with the key
// names of species, name, age, gender & favoriteFood.

var ids = [1,2,3]; //Hundreds of elements here
var names = ["tigre","chat","chien"]; //Hundreds of elements here
var ages = ["4","1","2"];
var genders = ["Male","Female","Male"]
var favoriteFoods =["viande","viande","viande"] 

var moreAnimals = ids.map((id, index) => {
    return {
      id: id,
      name: names[index],
      age: ages[index],
      gender: genders[index],
      favoriteFood: favoriteFoods[index]
    }
  });console.log(moreAnimals)