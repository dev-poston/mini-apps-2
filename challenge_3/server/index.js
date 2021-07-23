const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({entended: true}));

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});

