const express = require('express');
const AppleaRepository = require('../../api/appeal/appeal.service');
const AppleaRouter = express.Router();

AppleaRouter.route('/api/appl').post(async (req, res) => {
    const { appeal, number} = req.body; 
   
    const result = await AppleaRepository.createA(appeal, number);
    res.send(result);
});

module.exports = AppleaRouter;
