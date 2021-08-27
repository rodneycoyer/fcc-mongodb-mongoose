require('dotenv').config();
const mongoose = require('mongoose');

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
  newPerson.save(function (err, data) {
    if (err) {
      return console.error(err);
    }
    done(null, data);
  });
};

// create many using 'Model.create()'
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

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
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
