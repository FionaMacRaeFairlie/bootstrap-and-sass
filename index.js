const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.get('/bootstrapExample', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/bootstrapExample.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}` +
      "; press Ctrl-C to terminate."
  )
);
