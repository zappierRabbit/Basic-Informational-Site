const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    try{
        res.render('index');
    }
    catch{
        res.render('404');
    }
});

app.get('/about', (req, res) => {
    try{
        res.render('about');
    }
    catch{
        res.render('404');
    }
});

app.get('/contact-me', (req, res) => {
    try{
        res.render('contact-me');
    }
    catch{
        res.render('404');
    }
});

app.get('*', (req, res) => {
    res.render('404');
});
 
const port = 3000;
app.listen(port, (req, res)=>{
    console.log("running....");
});


 
