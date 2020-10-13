const express = require('express');
const cors = require('cors');
const app = express();
const port = 1234;


app.use(cors());

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/photos', (req, res) => {
  res.send([
    {
      'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/7/75/Io_Joy_standard2.jpg/revision/latest?cb=20150425021126', 'title': 'Kde bolo tam bolo...'
    },
    {
      'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/9/98/Io_Disgust_standard2.jpg/revision/latest?cb=20170829015054', 'title': 'Kde bolo tam bolo...'
    },
    {
      'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/7/79/Io_Fear_standard2.jpg/revision/latest?cb=20150425021148', 'title': 'Kde bolo tam bolo...'
    },
    {
      'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/7/7a/Io_Anger_standard2.jpg/revision/latest?cb=20150425021210', 'title': 'Kde bolo tam bolo...'
    }
    
    

    
  ])
})

app.listen(port, () => {
console.log('server is listening on port' + port)
})

module.exports = app;
