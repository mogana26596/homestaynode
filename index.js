const express = require('express');
const mongo = require('./connect');
const cors = require('cors');
const dotenv = require('dotenv');
const register = require('./router/registerRouter');
const product = require('./router/productRouter');
// const product1= require('../modules/productModule');
const auth = require("./modules/authModule");

dotenv.config();
mongo.connect();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', register);
app.use('/', (req, res)=>{
    res.send('Welcome Home again')
})
app.use('/', auth.authenticateUser);
app.use('/product', product);

app.listen(process.env.PORT);