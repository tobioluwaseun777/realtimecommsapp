const router = require('express').Router()
const { serveFirstPage, serveSecondPage } = require('../controllers/serverPages')
router.get('/', (req, res) => res.redirect('/1'))
router.get('/1', serveFirstPage)
router.get('/2', serveSecondPage)


module.exports = router