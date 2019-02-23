const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to mondodb server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Rafeeq'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5c70ec7bd936583ef415f929')
  }).then((result) => {
    console.log(result);
  });

  client.close();
});
