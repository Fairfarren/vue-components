const fs = require('fs')

function addInstall (path) {
  fs.readFile('./src/components/index.js', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    const install = data.toString()
    const start = install.indexOf('{')
    const end = install.lastIndexOf('}')
    const installObj = install.slice(start + 1, end - 1)
    const installContentStart = installObj.indexOf('{')
    const installContentEnd = installObj.indexOf('}')
    const installContent = installObj.slice(installContentStart + 2, installContentEnd - 3)
    const textInstall =
      `${installContent}
    Vue.component('fairfarren${path.charAt(0).toUpperCase()}${path.slice(1)}', ${path})`
    const importStart = install.indexOf('const theComponents')
    const textImport = install.slice(0, importStart) + `import ${path} from '@/components/${path}/${path}'`
    fs.writeFile('./src/components/index.js',
      `${textImport}
const theComponents = {
  install (Vue) {
${textInstall}
  }
}
export default theComponents
`
      , (err) => {
        if (err) {
          console.log(err)
        }
      })
  })
}

module.exports = addInstall
