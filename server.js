const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static('public'))

const codesRouter = require("./routes/codes")
const languagesRouter = require("./routes/languages")

app.use("/codes", codesRouter)
app.use("/languages", languagesRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log("listening at http://localhost:3000/ in development")
})