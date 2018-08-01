const fs = require('fs')

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

</style>`
  if (!fs.existsSync(`./src/views/box/${path}`)) {
    await fs.mkdirSync(`./src/views/box/${path}`)
  }
  fs.writeFile(`./src/views/box/${path}/${path}View.vue`, text, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

module.exports = addView
