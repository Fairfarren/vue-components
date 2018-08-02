const fs = require('fs')
const create = require('../createReadmeVue/create')

fs.readdir('./src/components', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  let arr = []
  data.forEach(item => {
    if (!item.includes('.')) {
      arr.push(item)
    }
  })
  arr.forEach(item => {
    fs.watch(`./src/components/${item}/README.md`, (event, filename) => {
      console.log('event is: ' + event)
      if (filename) {
        console.log('filename provided: ' + item)
        create(item)
      } else {
        console.log('filename not provided')
      }
    })
  })
})
