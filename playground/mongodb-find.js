// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID,}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // retreives all documents from Todos collection converts them into an array and prints them to the screen
    // db.collection('Todos').find().toArray()
    //     .then( (docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // retreives all docs from todo collection that are not completed
    //     db.collection('Todos').find({completed:false}).toArray()
    //     .then( (docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // retreives doc using the _id
    db.collection('Todos').find({
        _id:new ObjectID('5be4d651b4f808218d1fc14c')
        }).toArray().then( (docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find().count().then( (count) => {
            console.log(`Todos count: ${count}`);
        }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    

    // client.close();
});