
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port =process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/', require('./routes/user'))

app.listen(port, () => {
  console.log(`connection is created at port no.${port}`)
})