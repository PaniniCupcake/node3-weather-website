const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()//sets default

//define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
//Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))


app.get('',(req,res) =>
{
    res.render('index',{
        title: 'Weather app',
        name: 'Laur'
    })
})
app.get('/about',(req,res) =>
{
    res.render('about',{
        title: 'A boat',
        name: 'Laur'
    })
})
app.get('/help',(req,res) =>
{
    res.render('about',{
        title: 'Help me',
        name: 'Laur'
    })
})
/*app.get('',(req,res) => {
    res.send("<h1>WEATHER!!!</h1>")
})*/
/*
app.get('/help',(req,res) =>
{
    res.send({name:'Andrew',age:35})
})


app.get('/about',(req,res) =>
{
    res.send('<h1>ABOUT!!</h1>')
})
*/
app.get('/weather',(req,res) =>
{
    if(!req.query.search)
    {
        return res.send({
            error: 'Give a search term you moron'
        })
    }
    console.log(req.query)
    res.send(
        {
            forecast: 'Yer arse is arse',
            location: 'the grass man',
            adress: 'ponk'
        }
    )
})

app.get('/products',(req,res) =>
{
    if(!req.query.search)
    {
        return res.send({
            error: 'Give a search term you moron'
        })
    }
    console.log(req.query)
    res.send(
        {
            products:[]
        }
        )
})

app.get('/help/*',(req,res) =>
{
    res.send("YOU WANT MORE THAN HELP??")
})

app.get('*',(req,res) =>
{
    res.render('error',{
        title: 'YOU FUCKED UP',
        name: 'Laur'
    })
})

app.listen(3000, () =>{
    console.log('Server is up on port 3000.')
})