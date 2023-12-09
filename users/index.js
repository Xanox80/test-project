const indexRouter = require('express').Router();

indexRouter.get('/', (req, res) => {
    console.log(req.query);
    res.send('search: ' + req.query.search)
})

indexRouter.post('/', (req, res, next) => {
	res.send('POST method...')
})

indexRouter.delete('/', (req, res) => {
	res.send('DELETE method...')
})

indexRouter.post('/login', (req, res) => {

	const users = [ 
		{login: 'mike', password: '12345'},
		{login: 'nicolas', password: 'qwerty'},
	]

	let user = users.find(el => {
		return req.body.login === el.login && req.body.password === el.password
	})

	if(user){
		return res.json({message: 'logined'})
	}
	res.status(400).json({message: 'incorrect login or password'});

})

module.exports = indexRouter