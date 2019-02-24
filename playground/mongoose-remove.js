const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const {ObjectID} = require('mongodb');

const { User } = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5c72c877389c2477590d5e04').then((todo) => {
  console.log(todo);
})
