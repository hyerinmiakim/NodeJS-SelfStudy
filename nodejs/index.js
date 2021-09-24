const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// ejs를 활용하여 html파일을 render

// midware 정적 폴더 등록
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('Home !');
    return res.render('home.html');
});

app.get('/welcome', (req, res) => {
    console.log('Welcome!');
    return res.render('welcome.html')
});

app.get((req, res) => {
    res.status(404).send('not found')
})

app.listen(3000, () => console.log(`Running the server on port ${port}`))
