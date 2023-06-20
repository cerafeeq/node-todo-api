const { MongoClient, ObjectID } = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }

  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  var user = { name: "Andrew", age: 25 };
  var { name } = user;
  console.log(name);
  // db.collection("Todos").insertOne(
  //   {
  //     text: "Something to do",
  //     completed: false,
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return conosle.log("Unable to insert todo", err);
  //     }

  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // );

  // db.collection("Users").insertOne(
  //   {
  //     name: "Andrew",
  //     age: 25,
  //     location: "Philadelphia",
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert user", err);
  //     }
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // );

  client.close();
});
