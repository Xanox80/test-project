const express = require('express');
const UserService = require('../service/user.service');


const userRouter = express.Router();

// userRouter.route('/').get(async (req, res) => {
//   // get users
// })

userRouter.route('/api/login').post(async (req, res) => {
  result = await UserService.login(req.body.username, req.body.password);
  res.send(result);
})

userRouter.route('/api/update').put((req, res) => {
  res.send('update user...');
}).delete((req, res) => {
  res.send('delete user...');
});

module.exports = userRouter;
