const express = require('express');
const bodyParser = require('body-parser');
const buildDetails = require('./BuildDetails.json');
const buildMetrics = require('./BuildMetrics.json');
const defaultProjectBuild = {
  "projectName": "default",
  "platform": "default",
  "projectVersion": "default",
  "branchName": "default",
  "pid": null,
  "jobID": "default",
  "creationDate": "2018-07-02T15:11:48-0400",
  "duration": 656223,
  "result": "SUCCESS"
};
const defaultProjectMetric = {
  "projectName":"default",
  "avgDuration":438.03523841059604,
  "successPercentage":35.363,
  "mttr":14.383329
}
const cors = require('cors');

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

app.get('/builds/projects', (req, res) => {
    console.log('GET: recieved build projects details...');
    res.send(buildDetails);
});

app.get('/builds/projects/:projectName', (req, res) => {
    console.log('GET: recieved build project details for: ' + req.params.projectName);
    const arr = buildDetails.projects;
    const result = [];
    for (var i=0; i < arr.length; i++) {
      if (arr[i]["projectName"] === req.params.projectName)
        result.push(arr[i]);
    }
    if (result.length > 0)
      res.send(result);
    else
      res.send([defaultProjectBuild]);
});

app.get('/builds/projects/:projectName/branch/:branchName', (req, res) => {
    console.log('GET: recieved build project details for branch: ' + req.params.branchName + req.params.projectName);
    const arr = buildDetails.projects;
    let result = defaultProjectBuild;
    for (var i=0; i < arr.length; i++) {
      if (arr[i]["projectName"] === req.params.projectName && arr[i]["branchName"] === req.params.branchName) {
          console.log('Inside if statement: ');
          console.log(arr[i]);
          result = arr[i];
        }
    }
    res.send(result);
});

app.get('/metrics/projects', (req, res) => {
    console.log('GET: recieved metrics projects details...');
    res.send(buildMetrics);
});

app.get('/metrics/projects/:projectName', (req, res) => {
    console.log('GET: recieved metric project details for: ' + req.params.projectName);
    const arr = buildMetrics.projects;
    const result = [];
    for (var i=0; i < arr.length; i++) {
      if (arr[i]["projectName"] === req.params.projectName)
        result.push(arr[i]);
    }
    if (result.length > 0)
      res.send(result[0]);
    else
      res.send([defaultProjectMetric]);
});

app.listen(8088, () => console.log('Server started at port 8088!!!'));