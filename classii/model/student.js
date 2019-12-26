const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var studentSchema = new mongoose.Schema({
    firstName : { type :String },
    lastName : { type :String }, 
    rollNumber: { type : Number},
    rank: { type : Number },
    phoneNumber: { type : Number },
    class: { type : String},
    transportation: { type : String},
    fee: { type : Number}
    
});

var SomeModel = mongoose.model('Students', studentSchema );

module.exports = SomeModel;