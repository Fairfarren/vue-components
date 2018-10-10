const fs = require('fs')
const github = require('./githubApi')

function create (chiose) {
  if (chiose === 'all') {
    fs.readdir('../src/components', (err, data) => {
      if (err) console.log(err)
      let arr = []
      data.forEach(item => {
        if (!item.includes('.')) {
          arr.push(item)
        }
      })
      arr.forEach(item => {
        fs.readFile(`./src/components/${item}/README.md`, async (err, data) => {
          if (err) console.log(err)
          const html = await github(`./src/components/${item}`)
          fs.writeFile(`./src/views/box/${item}/${item}ReadMe.vue`,
            `<template>
<div class='markdown-body entry-content'>
  ${html}
</div>
</template>

<script>
export default {
}
</script>
`, (err) => {
              if (err) {
                console.log(err)
                return
              }
              console.log('全部打包成功')
            })
        })
      })
    })
  } else {
    fs.readFile(`./src/components/${chiose}/README.md`, async (err, data) => {
      if (err) {
        console.log(err)
        return
      }
      const html = await github(`./src/components/${chiose}`)
      fs.writeFile(`./src/views/box/${chiose}/${chiose}ReadMe.vue`,
        `<template>
<div class='markdown-body entry-content'>
  ${html}
</div>
</template>

<script>
export default {
}
</script>
`, (err) => {
          if (err) console.log(err)
          console.log('打包成功', new Date())
        })
    })
  }
}

module.exports = create
