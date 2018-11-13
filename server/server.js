const mongoose = require('mongoose');

mongoose.Promise = global.Promise;  
mongoose.connect('mongodb://localhose:27017/TodoApp');

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
