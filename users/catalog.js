const catalogRouter = require('express').Router();

catalogRouter.get('/:id/section/:part', (req, res) => {
	let info = 'catalog: ' + req.params.id + ' ' + 'part: ' + req.params.part;
	res.send(info)
})

module.exports = catalogRouter
