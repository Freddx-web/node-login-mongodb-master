
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');



const app = express();

app.post('/login', function(req,res, next) {

	const username = req.body.userName;
	const password = req.body.password;

	//
	userDB.getUserByUsername(userName){
		.then(function(user){
			return bcrypt.compare(password,user.password);
		})
	}
})