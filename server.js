const express = require("express")
const app = express()

app.use(express.json())

const codesRouter = require("./routes/codes")
const languagesRouter = require("./routes/languages")
const indexRouter = require("./routes/index")

app.use("/", indexRouter)
app.use("/codes", codesRouter)
app.use("/languages", languagesRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log("listening at http://localhost:3000/ in development")
})