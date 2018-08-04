const express = require('express');
const cors    = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();

// USE
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
// GET

app.get('/status', (req, res) =>{
  res.send('هلا ابحمودي')
});

app.listen(3000, (req, res)=>{
  console.log('Hala');
})
