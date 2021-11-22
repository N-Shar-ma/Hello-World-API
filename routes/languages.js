const data = require('../HelloWorld.json')
const express = require("express")
const router = express.Router()

router.get('/', (req, res) => { // returns list of all available languages
    res.send(data.map(code => code.language_name))
})

module.exports = router