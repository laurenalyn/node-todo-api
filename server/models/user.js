let mongoose = require('mongoose');

// ====================
// User Model
// ====================
let User = mongoose.model('User', {
    email: {
        type: String,
        required: true, 
        minlength: 1, //must have atleast 1 character
        trim: true //trims any whitespace before or after text
    }
});

// let newUser = new User({
//     email: 'laurenalyn@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log('User added');
// }, (e) => {
//     console.log('Unable to add user');
// });

// newUser.save().then((doc) => {
//     console.log('User added');
// }, (error) => {
//     console.log('Unable to add user', error);
// });

module.exports = {User};