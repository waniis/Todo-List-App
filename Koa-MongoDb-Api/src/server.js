require('dotenv').config()
const Koa = require('koa');
var bodyParser = require('koa-bodyparser');
const Router = require("./config/route");
const initDB = require('./config/database');
const app = new Koa();
app.use(bodyParser());

  app
  .use(Router);

app.on('error', err => {
  console.log('server error', err)
});

initDB()
app.listen(app.listen(process.env.PORT || 5000));