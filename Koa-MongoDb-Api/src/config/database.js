const mongoose = require('mongoose');
const initDB = () => {
  const uri = process.env.URI ||'mongodb+srv://wanis:zZri5JcKb8HYwJHC@cluster0.xzx9y.mongodb.net/test';
  mongoose.connect(uri , { useUnifiedTopology: true,useFindAndModify: false ,useNewUrlParser: true });
  mongoose.connection.once('open', () => {
    console.log('connected to database , Welcome to our free Api');
  });
}

module.exports = initDB;
