const express = require('express')

const router = express.Router()

router.get('/', async (rec, res) => {
    res.render('pages/index')
})

module.exports = router