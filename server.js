

// IMPORT EXPRESS
const express = require('express')
const app = express()
const port = 3000

// MIDDLEWARE
app.use(express.urlencoded({extended: false}))

// NEW ROUTE TO START
app.get('/', (req, res) => {
    res.send('this is the new route')
})

// NEW
app.get('/new', (req, res) => {
    res.render('new.ejs')
})

// CREATE
app.post('/create' ,(req, res) => {

})


// LISTEN TO PORT
app.listen(port, () => {
    console.log('listening to port: ', port)
})