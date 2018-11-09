// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID,}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // retreives all collectins from Todos collection converts them into an array and prints them to the screen
    db.collection('Todos').find().toArray()
        .then( (docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
        console.log('Unable to fetch todos', err);
    });


    // client.close();
});