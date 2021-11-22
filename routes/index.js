const express = require("express")
const router = express.Router()

router.get('/', (req, res) => { // returns homepage for api with instructions
    res.send('Homepage coming soon, meanwhile checkout the <a href="https://github.com/N-Shar-ma/communIIITy/blob/master/routes/README.md">readme</a>!')
})

module.exports = router