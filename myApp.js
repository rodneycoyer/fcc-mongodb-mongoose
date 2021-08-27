require('dotenv').config();
const mongoose = require('mongoose');
// server connection
mongoose.connect(process.env.MONGO_URI);

const Person = require('./models/persons');

// create and save a person
const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: "Sasquatch Jenkins",
    age: 420,
    favoriteFoods: [
      "salmon",
      "berries",
      "nuts"
    ]
  });
  newPerson.save(function (err, person) {
    if (err) {
      return console.error(err);
    }
    done(null, person);
  });
};

// create many, array, using 'Model.create()'
let arrayOfPeople = [
  {name: "Jose", age: 24, favoriteFoods: ["taco truck, pine nuts"]},
  {name: "Barney", age: 72, favoriteFoods: ["smoked chicken, potato salad"]},
  {name: "Chester", age: 18, favoriteFoods: ["olive garden, salad, breadsticks"]}
]
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) {
      return console.log(err);
    }
    done(null, people);
  });
};

// use Model.find() to search database using a search-key
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    done(null, personFound);
  });
};

// use Model.findOne() to return a single matching
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, data) {
    if (err) {
      return console.log(err);
    }
    done(null, data);
  });
};

// use Model.findById() to search your database by _id
const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if (err) {
      return console.log(err);
    }
    done(null, data);
  });
};

// find person by id, edit something in an array, then save doc
const findEditThenSave = (personId, done) => {
  // item to add at end of array
  const foodToAdd = "hamburger";
  // find person by id
  Person.findById(personId, function (err, person) {
    if (err) {
      return console.log(err);
    }
    // array.push add to favoriteFood array
    person.favoriteFoods.push(foodToAdd);
    // save updates to person
    person.save((err, updatedPerson) => {
      if (err) {
        return console.log(err);
      }
      done(null, updatedPerson);
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
