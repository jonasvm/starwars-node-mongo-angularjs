const createError = require('http-errors');
const express = require('express');

const logger = require('morgan');

var cors = require('cors');

const indexRouter = require('./src/components/user/UserRoute');

const {handleError404} = require('./middlewares');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(handleError404);

module.exports = app;
