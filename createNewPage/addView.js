const fs = require('fs')

async function addView (path) {
  const text =
`<template>
  <div>
    <fairfarren${path.charAt(0).toUpperCase()}${path.slice(1)} />
    <br />
    <${path}Readme />
  </div>
</template>

<script>
export default {
  components: {
    ${path}Readme: () => import('@/views/box/${path}/${path}ReadMe.vue')
  }
}
</script>

<style lang="scss" scoped>

</style>
`
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
