const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })

const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());

require('./db/conn');
require("./model/userSchema");

const DB = process.env.DATABASE;
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(require('./router/auth'));


if(process.env.NODE_ENV = "production"){
    app.use(express.static("client/build"));
}

app.listen(port, (err) => {
    console.log(`APP is running onq  ${port}`)
})