const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const TaskSchema = new Schema({ 
    
  title: {type : String , required : true} ,
  items :[ { title: {type : String } }]
  }); 

module.exports = mongoose.model('task', TaskSchema)