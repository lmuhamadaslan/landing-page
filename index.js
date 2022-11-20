const express = require('express');

const app = express();


// files static
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.listen(3000, () => {
  console.log('Server is up and running...')
})