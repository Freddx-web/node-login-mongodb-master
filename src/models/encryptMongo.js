app.post('/login', function(req,res, next) {
	var username = req.body.userName;
	var password = req.body.password;

	//
	userDB.getUserByUsername(userName){
		.then(function(user){
			return bcrypt.compare(password,user.password);
		})
	}
})