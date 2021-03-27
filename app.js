const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static ('public'))


const items = ['Eat', 'Food', 'Sleep']
const workItem = []

app.get('/', (req, res) => {
  const day = date.getDate()
  res.render('list', {listTitle: day, newListItems: items})
})


app.post('/', function(req, res) {
  const item = req.body.newItem
  if(req.body.list==='work'){
    workItem.push(item)
    res.redirect('/work')
  }else {
    items.push(item)
    res.redirect('/')
  }

})


app.get('/work',function(req,res){
  const day = date.getOnlyDay()
  res.render('list',{listTitle: day +'s, Work', newListItems: workItem})
})

app.get('/about',function(req,res){
  res.render('about')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
