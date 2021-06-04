

// IMPORT EXPRESS
const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')

// MIDDLEWARE
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

// DATABASE
const planetInfos = require('./models/planetInfos.js')

// NEW ROUTE TO START
app.get('/', (req, res) => {
    res.send('this is the new route')
})

// INDEX
app.get('/planet', (req, res) => {
    res.render('index.ejs', {
        allScientist: planetInfos
    })
})

// NEW
app.get('/planet/new', (req, res) => {
    res.render('new.ejs')
})

// CREATE
app.post('/planet' ,(req, res) => {
      planetInfos.push(req.body)
      console.log('req.body is: ', req.body);
      res.redirect('/planet')
})

// SHOW


// DELETE
app.delete('/planet/:index', (req, res) => {
    planetInfos.splice(req.params.index, 1)
    res.redirect('/planet')
})


// LISTEN TO PORT
app.listen(port, () => {
    console.log('listening to port: ', port)
})