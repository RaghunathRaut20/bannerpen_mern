const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })

const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());

require('./db/conn');
require("./model/userSchema");

const DB = process.env.DATABASE;
const port = process.env.PORT;

app.use(express.json());
app.use(require('./router/auth'));

app.listen(port, (err) => {
    console.log(`APP is running on  ${port}`)
})