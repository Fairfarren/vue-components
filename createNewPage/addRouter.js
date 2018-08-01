const fs = require('fs')

function addRouter (path) {
  fs.readFile('./src/router/routers.js', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    const router = data.toString()
    let start = router.indexOf('[')
    let end = router.lastIndexOf(']')
    console.log(start, end)
    let routerArr = router.slice(start + 1, end - 1)
    const text =
      `const routers = [${routerArr}, {
    path: '/${path}',
    component: () => import('@/views/box/${path}/${path}View')
  }
]

export default routers
`
    console.log(text)
    fs.writeFile('./src/router/routers.js', text, (err) => {
      if (err) {
        console.log(err)
      }
    })
  })
}

module.exports = addRouter
