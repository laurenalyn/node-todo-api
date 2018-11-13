let mongoose = require('mongoose');
// ====================
// Todo Model
// ====================
let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true, 
        minlength: 1, //must have atleast 1 character
        trim: true //trims any whitespace before or after text
    },
    completed: {
        type: Boolean,
        default: false //sets default 
    },
    completedAt: {
        type: Number,
        default: null 
    }
});

module.exports = {Todo};

// creates a new instance of a Todo
// let newTodo = new Todo({
//     text: 'Cook dinner'
// });

// let newTodo = new Todo({
//     text: 'Do the dishes',
//     completed: false,
//     completedAt: 0
// });

// saves new Todo to db and save() - returns a promise
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (error) => {
//     console.log('Unable to save todo', error);
// });
