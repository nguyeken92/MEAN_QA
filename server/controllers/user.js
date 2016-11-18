console.log("User controller server");
var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = (function() {
	return {
		login: function(req, res) {
			User.findOne({name: req.body.name}, function(err, user) {
				if(!user) {
					var user = new User(req.body)
					user.save(function(err, user) {
						if(err) {
							return res.json({status: false})
						} else{
							req.session.user = user;
							req.session.save();
							return res.json({status: true, user: user})
						}
					})
				} else {
					req.session.user = user;
					req.session.save()
					return res.json({status: true, user: user})
				}
			})
		},
		checkSess: function(req, res) {
			if(req.session.user) {
				return res.json({user: req.session.user});
			} else {
				return res.json({user: null});
			}
		},
		logout: function(req, res) {
			req.session.destroy();
			res.redirect('/');
		},
	}
})();
