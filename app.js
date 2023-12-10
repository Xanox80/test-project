const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./db');
db();
const cors = require('cors');
const userRouter = require('./api/router/user.router');

const app = express();
const port = 4000;
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Ensure the correct file path for script.js
app.use('/', require('./users'));
app.use('/catalog', require('./users/catalog'));
app.use('/user', require('./api/router/user.router'));
app.use('/user', require('./api/models/user.model'))
app.use(express.json());
app.use(cors()); // Enable CORS

app.use('/user', userRouter);



app.listen(port, () => {
    console.log('server started on http://localhost:' + port);
});
