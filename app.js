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
// app.use('/user', require('./api/models/user.model'))
app.use('/notePhoto', require('./api/router/notes.router'));
app.use('/apartments', require('./api/router/apartmens.router'));
app.use('/villa', require('./api/router/villa.router'));
app.use('/appeal', require('./api/router/appeal.router'));
app.use('/getnote', require('./api/router/notes.router'));
app.use('/getroom', require('./api/router/apartmens.router'));
app.use('/getVilla', require('./api/router/villa.router'));
app.use('/daletnote', require('./api/router/notes.router'));
app.use('/deletevilla', require('./api/router/villa.router'));
app.use('/deleteroom', require('./api/router/apartmens.router'));
app.use('/updatehouse', require('./api/router/notes.router'));
app.use('/updataroom', require('./api/router/apartmens.router'));
app.use('/updatavilla', require('./api/router/villa.router'));
app.use('/photoRoom', require('./api/router/apartmens.router'));
app.use('/photoVilla', require('./api/router/villa.router'));
app.use('/notes', require('./api/router/notes.router'));

app.use(express.json());
app.use(cors()); // Enable CORS

app.use('/user', userRouter);

app.listen(port, () => {
	console.log('server started on http://localhost:' + port + '/Login.html');
});
