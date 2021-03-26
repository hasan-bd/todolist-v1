const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static ('public'))


let items = ['Eat', 'Food', 'Sleep']
let workItem = []

app.get('/', (req, res) => {
  let today = new Date()
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  day = today.toLocaleDateString("en-US", options);
  res.render('list', {listTitle: day, newListItems: items})
})


app.post('/', function(req, res) {
  let item = req.body.newItem
  if(req.body.list==='work'){
    workItem.push(item)
    res.redirect('/work')
  }else {
    items.push(item)
    res.redirect('/')
  }

})


app.get('/work',function(req,res){
  res.render('list',{listTitle: 'work', newListItems: workItem})
})

// app.post('/work',function(req,res){
//   res.redirect('/')
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
