require('dotenv').config();
const mongoose = require('mongoose');
const { collection } = require('./models/persons');
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

// model.findOneAndUpdate() to update docs
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) {
      return console.log(err);
    }
    done(null, updatedDoc);
  })
};

// delete one document using Model.findByIdAndRemove method
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function (err, response) {
    if (err) {
      return console.log(err);
    }
    done(null, response);
  })
};

// delete many with Model.remove method
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, function (err, response) {
    if (err) {
      return console.log(err);
    }
    done(null, response);
  })
};

// chain search query helpers to narrow search results
const queryChain = (done) => {
  const foodToSearch = "burrito";
  // create but don't execute query using Model.find method and store query into variable
  const findQuery = Person.find({favoriteFoods: foodToSearch});
  if(!findQuery) {
    return console.log(err);
  } else {
    findPeopleFavoriteFood
    .sort({name: -1}) // 1 for ascending order and -1 for descending order.
    .limit(5) // return array with up to 5 items in it
    .select({ favoriteFoods: 0 }) // hide certain property. 0 means false and thus hide name property; 1 means true so age property will show
    .exec(function(err, people) {
      if (err) {
        return console.log(err);
      }
      done(null, people);
    })
  }
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
