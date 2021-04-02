const express = require('express');
const app = express();

//app.use((req, res) => {
//  console.log('WE GOT A NEW REQUEST!!');
//res.send("hello, we got your request! this is the response!!")
//})
// res.send('<h1>This is my webpage!')
//})

app.get('/', (req, res) => {
    res.send('This is the home page!')
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!! THIS IS A SUBREDDIT!!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I do not know that path!`)
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})

