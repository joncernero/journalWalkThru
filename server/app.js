require('dotenv').config()
let express = require('express')
let app = express()
let sequelize = require('./db')
let journal = require('./controllers/journalcontroller')
let user = require('./controllers/usercontroller')
let calc = require('./controllers/calculatorController')
sequelize.sync()
//sequelize.sync({force:true}) -- use to refresh the database

app.use(express.json())

// app.use(require('./middleware/validate-session')); -- restricts all of the routes when you have a controller or multiple controllers
app.use('/journal', journal)
app.use('/user', user)
app.use('/calculator', calc)
app.listen(3000, function () {
  console.log('App is listening on port 3000')
})
