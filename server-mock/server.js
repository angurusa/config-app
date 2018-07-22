const express = require('express');
const bodyParser = require('body-parser');
const podDifferences = require('./PodDifferences.json');
const compareInputs = require('./validatemsenv.json');
const cors = require('cors');

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

app.get('/env/getMsPodDetails/namespaces/:nameSpace/ms/:serviceName', (req, res) => {
    console.log('GET: recieved difference between pods...');
    res.send(podDifferences);
});

app.post('/env/validatemsenv/', (req, res) => {
    console.log(req.body);
    res.send(compareInputs);
});

app.listen(8088, () => console.log('Server started at port 8088!!!'));