const express = require('express');
const app = express();

const lookupRouter = require('./routes/lookup')

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', lookupRouter);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
