const addRouter = require('./addRouter')
const addView = require('./addView')
const addComponent = require('./addComponent')
const addInstall = require('./addInstall')

const pageName = 'hello'

addRouter(pageName)
addView(pageName)
addComponent(pageName)
addInstall(pageName)
