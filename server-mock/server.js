const express = require('express');
const bodyParser = require('body-parser');
const podDifferences = require('./PodDifferences.json');
const compareInputs = require('./validatemsenv.json');
const cors = require('cors');

const msNames = [
    {
        msName: 'DirecTVNowOrderMs'
    },
    {
        msName: 'WirelessMs'
    },
    {
        msName: 'CheckoutMs'
    },
];

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

app.get('/env/getMsPodDetails/namespaces/:namespace/ms/:serviceName', (req, res) => {
    console.log('GET: recieved difference between pods...');
    res.send(podDifferences);
});

app.post('/env/validatemsenv/', (req, res) => {
    console.log(req.body);
    if (req.body.properties === 'a') {
        res.send(compareInputs);
    } else {
        res.sendStatus(404);
    }
});

app.get('env/getStatus/namespaces/:namespace', (req, res) => {
    console.log('GET: received list of ms names in ' + req.params.namespace);
    res.send(msNames);
});

app.listen(8088, () => console.log('Server started at port 8088!!!'));