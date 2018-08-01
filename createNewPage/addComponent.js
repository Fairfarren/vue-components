const fs = require('fs')
const create = require('../createReadmeVue/create')

async function addView (path) {
  const text =
`<template>
  <div>
    ${path}
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
`
  if (!fs.existsSync(`./src/components/${path}`)) {
    await fs.mkdirSync(`./src/components/${path}`)
  }
  fs.writeFile(`./src/components/${path}/${path}.vue`, text, (err) => {
    if (err) {
      console.log(err)
    }
  })
  fs.writeFile(`./src/components/${path}/README.md`, `# ${path}`, (err) => {
    if (err) {
      console.log(err)
    }
    create(path)
  })
}

module.exports = addView
