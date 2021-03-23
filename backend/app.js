const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 1234;
const mongoose = require('mongoose');
const photosRouter = require('./routes/photosRouter');
// connection string password is found elsewhere ( and is fake to prevent anyone to connect to my DB )
const connString = `mongodb+srv://dbUser:${process.env.MONGO_DB_PASSWORD}@cluster0.rsg6u.mongodb.net/softwareDev?retryWrites=true&w=majority`;
// Use CORS Policy
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(connString, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log('Mongoo DB is connnected !!! :)')
  })
  .catch(() => {
    console.log('Error connecting Mongo DB')
  })

// Dummy home page - should be moved to its own router ( to router folder ) 
app.get('/', (req, res) => {
  res.send('This is dummy home page')
})

    
// Photos routes uses own router
app.use('/photos', photosRouter);


app.listen(port, () => {
  // Check for speciic port
console.log('server is listening on port ' + port)
})

module.exports = app;
