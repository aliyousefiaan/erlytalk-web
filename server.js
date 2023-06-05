const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  const msgsvc_api_url = process.env.MSGSVC_API_URL;
  res.render('index', { msgsvc_api_url });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
