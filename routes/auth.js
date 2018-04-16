module.exports = (io) => {

const express = require('express');
const router  = express.Router();
const path    = require('path');


router.post('/login', (req, res, next) => {
	const password = req.body.pass;
	const pass = process.env.LOGIN_PASS;
	console.log(password);
	console.log(pass);
	if(pass === password) {
		res.sendStatus(200);
	}
	else {
		res.sendStatus(401);
	}

});

// router.get('/power', (req, res, next) => {
// 	console.log('received power');
// 	io.emit("tv-power", "TvPower");
// 	res.sendStatus(200);
// });

return router;
}
