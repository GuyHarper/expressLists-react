const mongoose = require('mongoose');
const List = require('../models/list');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, { useMongoClient: true });

mongoose.Promise = require('bluebird');

List.collection.drop();
User.collection.drop();

List.create([{
  name: 'Groceries',
  entries: [{
    text: 'Bread',
    active: true
  },{
    text: 'Milk',
    active: true
  },{
    text: 'Biscuits',
    active: false
  }]
}])
  .then(lists => console.log(`${lists.length} lists created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
