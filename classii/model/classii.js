const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var classiiSchema = new mongoose.Schema({
    studentName : { type :String }, 
    rollNumber: { type : Number},
    rank: { type : Number },
    phoneNumber: { type : Number }
    
});

var SomeModel = mongoose.model('Classii', classiiSchema );

module.exports = SomeModel;