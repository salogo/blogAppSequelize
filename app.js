const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const models = require('./models')

app.use(express.urlencoded())
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.post("/delete-post",(req,res)=>{
    let postId = req.body.postId
    models.Post.destroy({
        where: {
            id:postId

        }
    }).then(()=>{
        res.redirect("/posts")
    })

})

app.get('/add-post',(req,res) => {
    res.render('add-post')
})

app.get('/posts',(req,res) => {

    models.Post.findAll().then(posts => {
        res.render('index',{posts: posts})
    })

})

app.post('/add-post',(req,res) => {

    let name = req.body.name
    let body = req.body.body
    let category  = req.body.category 

    let post = models.Post.build({
        name: name, 
        body: body ,
        category:category
    })

    post.save().then(savedPost => {
    
        console.log(savedPost)

        res.redirect('/posts')

    }) 


})


app.listen(3000,() => {
    console.log('Server is running...')
})