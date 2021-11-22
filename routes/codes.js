const data = require('../HelloWorld.json')
const express = require("express")
const router = express.Router()

router.get('/:language', (req, res) => { // returns hello world program in the requested language
    const result = data.find(code => code.language_name.toLowerCase() === req.params.language.toLowerCase())
    if(result) res.send(result)
    else res.sendStatus(404)
})

router.get('/', (req, res) => { // returns hello world program in all available languages
    res.send(data)
})

module.exports = router