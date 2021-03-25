const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))


var items = ['Eat', 'Food', 'Sleep']

app.get('/', (req, res) => {
  var today = new Date()
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  day = today.toLocaleDateString("en-US", options);
  res.render('list', {kindOfDay: day, newitems: items})
})


app.post('/', function(req, res) {
  var item = req.body.newitem
  items.push(item)
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
