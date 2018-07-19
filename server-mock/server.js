const express = require('express');
const bodyParser = require('body-parser');
const podDifferences = require('./PodDifferences.json');
const cors = require('cors');

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

app.get('env/getMsPodDetails/namespaces/:nameSpace/ms/:serviceName', (req, res) => {
    console.log('GET: recieved difference between pods...');
    res.send(podDifferences);
});

// app.get('/builds/projects/:projectName', (req, res) => {
//     console.log('GET: recieved build project details for: ' + req.params.projectName);
//     const arr = buildDetails.projects;
//     const result = [];
//     for (var i=0; i < arr.length; i++) {
//       if (arr[i]["projectName"] === req.params.projectName)
//         result.push(arr[i]);
//     }
//     if (result.length > 0)
//       res.send(result);
//     else
//       res.send([defaultProjectBuild]);
// });

// app.get('/builds/projects/:projectName/branch/:branchName', (req, res) => {
//     console.log('GET: recieved build project details for branch: ' + req.params.branchName + req.params.projectName);
//     const arr = buildDetails.projects;
//     let result = defaultProjectBuild;
//     for (var i=0; i < arr.length; i++) {
//       if (arr[i]["projectName"] === req.params.projectName && arr[i]["branchName"] === req.params.branchName) {
//           console.log('Inside if statement: ');
//           console.log(arr[i]);
//           result = arr[i];
//         }
//     }
//     res.send(result);
// });

// app.get('/metrics/projects', (req, res) => {
//     console.log('GET: recieved metrics projects details...');
//     res.send(buildMetrics);
// });

// app.get('/metrics/projects/:projectName', (req, res) => {
//     console.log('GET: recieved metric project details for: ' + req.params.projectName);
//     const arr = buildMetrics.projects;
//     const result = [];
//     for (var i=0; i < arr.length; i++) {
//       if (arr[i]["projectName"] === req.params.projectName)
//         result.push(arr[i]);
//     }
//     if (result.length > 0)
//       res.send(result[0]);
//     else
//       res.send([defaultProjectMetric]);
// });

app.listen(8088, () => console.log('Server started at port 8088!!!'));