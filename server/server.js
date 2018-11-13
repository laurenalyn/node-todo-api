const mongoose = require('mongoose');

mongoose.Promise = global.Promise;  
mongoose.connect('mongodb://localhost:27017/TodoApp');

// sets up model and type of content
let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// creates a new instance of a Todo

// let newTodo = new Todo({
//     text: 'Cook dinner'
// });

// let newTodo = new Todo({
//     text: 'Do the dishes',
//     completed: false,
//     completedAt: 0
// });

// saves new Todo to db and returns a promise
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

let otherTodo = new Todo({
    text: 'Eat ice cream',
    completed: true,
    completedAt: 1234
});

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo');
});