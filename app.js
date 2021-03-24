const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs');

const port = 3000

app.get('/', (req, res) => {
var today = new Date()
var  day =""
if(today.getDay() == 6 || today.getDay == 0){
  day = 'Weekend'
}
else{
  day ='weekday'
}

res.render('list',{kindOfDay: day})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
