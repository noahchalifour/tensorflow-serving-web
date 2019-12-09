const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// const tensorflow = require('./utils/tensorflow');
// tensorflow.initConfig();

const api = require('./api');

const app = express();
const reactAppPath = path.join(__dirname, 'react-app', 'build');
const PORT = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(express.static(reactAppPath));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', api);

app.get('/', function(req, res) {
  res.sendFile(path.join(reactAppPath, 'index.html'));
});

app.listen(PORT, function() {
    console.log(`Tensorflow Serving Web running on port ${PORT}`);
});