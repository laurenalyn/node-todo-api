// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID,}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'})
    //     .then((result) =>{
    //         console.log(result);
    //     });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // Exercise 1- remove all duplicate users

    // db.collection('Users').deleteMany({name: 'Lauren'})
    //     .then((result) => {
    //         console.log(result);
    //     });

     // Exercise 2 - remove one by id
     db.collection('Users').deleteOne({_id: ObjectID('5be4d7db82e38921abf2b833')})
     .then((result) =>{
         console.log(result);
     });

   

    // client.close();
});