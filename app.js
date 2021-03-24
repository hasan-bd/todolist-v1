const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  var today = new Date()
  if(today.getDay() === 6 || today.getDay()===0 ){
    res.write('Hello kamrul \n')
    res.write('Today weekend . Lets chill !!!')

  }
  else {
    res.write('Hello kamrul \n')
    res.write('Today is not weekend so you have to work today !!!')
    res.send()
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
