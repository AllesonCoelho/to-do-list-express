const express = require('express')
const path = require('path')
const checkListRouter = require('./src/routes/checklist') 
const rootRouter = require('./src/routes/index') 
const methodOverride = require('method-override')

require('./config/database')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extented : true}))
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')



app.use('/',rootRouter)
app.use('/checkLists',checkListRouter)

app.listen(3000, () => {
    console.log('Servidor foi iniciado')
})