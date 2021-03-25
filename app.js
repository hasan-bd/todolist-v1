const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static ('public'))


let items = ['Eat', 'Food', 'Sleep']

app.get('/', (req, res) => {
  let today = new Date()
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  day = today.toLocaleDateString("en-US", options);
  res.render('list', {kindOfDay: day, newListItems: items})
})


app.post('/', function(req, res) {
  let item = req.body.newItem
  items.push(item)
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
