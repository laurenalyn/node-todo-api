const mongoose = require('mongoose');

mongoose.Promise = global.Promise;  
mongoose.connect('mongodb://localhose:27017/TodoApp');
