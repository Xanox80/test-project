const express = require('express');
const UserService = require('../user/user.service');

const userRouter = express.Router();

userRouter.route('/api/login').post(async (req, res) => {
  const result = await UserService.loginUser(req.body.username, req.body.password);
  res.send(result);
});

userRouter.route('/api/create').post(async (req, res) => {
  const result = await UserService.registerUser(req.body.username, req.body.password);
  res.send(result);
});

userRouter.route('/api/update').put((req, res) => {
  res.send('update user...');
}).delete((req, res) => {
  res.send('delete user...');
});

module.exports = userRouter;
