const express = require('express')
const app = express()
const port = 5000

const arr = [
  {
      name:'张三',
      id: 1,
      status: 1,
      age: 18
  },
  {
    name:'李四',
    id: 2,
    status: 1,
    age: 20
  },
  {
    name:'王五',
    id: 1,
    status: 1,
    age: 34
  }
]
app.get('/api/list', (req, res) => {
  console.log('jinlailema')
  
  res.send(arr)
})

app.put('/api/list/:id', (req, res) => {
  arr.forEach(item => {
    if(item.id == req.params.id){
      item.age = 44
    }
  })
  console.log(req.query)
  console.log(req.params)
  console.log(req)
  // console.log(res)
  res.send(arr)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})