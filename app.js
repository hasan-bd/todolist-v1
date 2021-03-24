const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs');

const port = 3000

app.get('/', (req, res) => {
var today = new Date()
var  day =""
switch(today.getDay()){
  case 6:
  case 0:
  day ='satudary and sunday and weekend'
  break;
  case 1:
  day='Monday'
  break;
  case 2:
  day='Tuesday'
  break;
  case 3:
  day='wenesday'
  break;
  case 4:
  day='Thusday'
  default:
  day= 'friday'
}


res.render('list',{kindOfDay: day})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
