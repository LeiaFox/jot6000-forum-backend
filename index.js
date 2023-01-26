// Entry Point of the API Server 
const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
}))

const test = [
    {
      author: "James",
      title: "My Stuff",
      posted: "01/01/2023",
      likes: 5,
      dislikes: 10,
      content: "My post content",
      replies: [
        {
          author: "James",
          title: "My Stuff",
          posted: "01/01/2023",
          likes: 5,
          dislikes: 10,
          content: "My post content",
          replies: [
            {
              author: "James",
              title: "My Stuff",
              posted: "01/01/2023",
              likes: 5,
              dislikes: 10,
              content: "My post content",
              replies: [
                {
                  author: "James",
                  title: "My Stuff",
                  posted: "01/01/2023",
                  likes: 5,
                  dislikes: 10,
                  content: "My post content",
                  replies: [
                    {
                      author: "James",
                      title: "My Stuff",
                      posted: "01/01/2023",
                      likes: 5,
                      dislikes: 10,
                      content: "My post content",
                      replies: [
                        
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          author: "James",
          title: "My Stuff",
          posted: "01/01/2023",
          likes: 5,
          dislikes: 10,
          content: "My post content",
          replies: [
            
          ]
        },
        {
          author: "James",
          title: "My Stuff",
          posted: "01/01/2023",
          likes: 5,
          dislikes: 10,
          content: "My post content",
          replies: [
            
          ]
        },
      ]
    },
]
  
app.get('/testdata', (req, res, next) => {
    res.send(test);
})

app.post('/posts', (req, res, next) => {
    if(req.body.title === undefined) return res.status(400).send({
        message: 'Title not found'
    });
    if(req.body.author === undefined) return res.status(400).send({
        message: 'Author not found'
    });
    if(req.body.content === undefined) return res.status(400).send({
        message: 'Content not found'
    });
    test.push(req.body);
    res.status(200).send({
        message: 'success'
    })
})
  
// Require the Routes API  
// Create a Server and run it on the port 3000
const server = app.listen(4000, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 3000
})