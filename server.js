const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      app = express(),
      PORT = 9000,
      createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);
app.set('view engine', 'ejs');



app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`стартуем на порту  ${PORT}`);
});



app.use(express.static('styles'));

app.get('/', (req, res) => {
  const title = 'Welcome on Poglyad';
  res.render(createPath('index'), { title });
});
app.get('/home', (req, res) => {
  const title = 'Home';
  res.render(createPath('main'), { title });
});

app.get('/profile', (req, res) => {
  const title = 'My Channel';
  res.render(createPath('profile'), {title });
});

app.get('/add-video', (req, res) => {
  const title = 'Add video';
  res.render(createPath('add-video'), { title });
});
app.get('/play-video', (req, res) => {
  const title = 'Play video';
  res.render(createPath('play-video'), { title });
});

app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(createPath('error'), { title });
});
