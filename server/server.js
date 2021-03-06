const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (request, response) => {
    let todo = new Todo ({
        text: request.body.text
    });

    console.log(request.body);

    todo.save().then((doc) => {
        response.send(doc);
    }, (error) => {
        response.status(400).send(error);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});