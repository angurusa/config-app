const express = require('express');
const bodyParser = require('body-parser');
const podDifferences = require('./PodDifferences.json');
const cors = require('cors');

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

app.get('/env/getMsPodDetails/namespaces/:nameSpace/ms/:serviceName', (req, res) => {
    console.log('GET: recieved difference between pods...');
    res.send(podDifferences);
});

// app.post('http://zlt19578.vci.att.com:30001/env/validatemsenv/', )

app.listen(8088, () => console.log('Server started at port 8088!!!'));