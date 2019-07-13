// const db = require('../models');
// const jwt = require('jsonwebtoken');

// exports.signin = async function(req, res, next){
//     let user= await db.User.findOne({
//         username = req.body.username
//     })
//     let {id, username} = user
//     let isMatch = await user.comparePassword(req.body.password)
//     if(isMatch){
//         let token= jwt.sign({
//             id,
//             username
//         },
//         process.env.SECRET_KEY)
//     }
// }
// exports.signup = async function(req, res, next) {
// 	try {
// 		let user = await db.User.create(req.body);
// 		let { id, username } = user;
// 		let token = jwt.sign(
// 			{
// 				id,
// 				username
// 			},
// 			process.envSECRET_KEY
// 		);
// 		//create user
// 		//create token aka sign in
// 		//process.envSECRET_KEY
// 		return res.status(200).json({
// 			id,
// 			username,
// 			token
// 		});
// 	} catch (err) {
// 		//if validation fails
// 		if (err.code === 11000) {
// 			err.message = 'That username has been taken, please select another';
// 		}
// 		return next({
// 			status: 400,
// 			message: err.message
// 		});
// 		//see what kind of error
// 		//respond with username/stn taken
// 		//otherwise send back 400
// 	}
// };
