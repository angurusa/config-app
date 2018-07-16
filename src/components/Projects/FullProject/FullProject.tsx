import * as React from 'react';
import axios from '../../../axios';
import Typography from '@material-ui/core/Typography';

import FullProjectProps from './FullProjectProps';
import FullProjectState from './FullProjectState';
import './FullProject.css';

export default class FullProject extends React.Component<FullProjectProps, FullProjectState> {
    state: FullProjectState;

    constructor(props: FullProjectProps) {
        super(props);
        this.state = {
            projectBuilds: {
                branchName: '',
                creationDate: '',
                duration: 0,
                jobID: '',
                pid: 0,
                platform: '',
                projectName: '',
                projectVersion: '',
                result: ''
            }
        }
    }

    componentDidMount() {
        this.loadFullMetricsData();
    }

    loadFullMetricsData() {
        const { projectName, branchName } = this.props.match.params;
        axios.get('/builds/projects/' + projectName + '/branch/' + branchName).then((result) => {
            this.setState(() => ({
                projectBuilds: result.data
            }));
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const {
            branchName,
            creationDate,
            duration,
            jobID,
            pid,
            platform,
            projectName,
            projectVersion,
            result
        } = this.state.projectBuilds
        return (
            <div>
                <Typography variant="title" gutterBottom={true}>
                    Project Build Details
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Project Name: {projectName}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Branch Name: {branchName}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Project Version: {projectVersion}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Creation Date: {creationDate}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Duration: {duration}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Job ID: {jobID}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    PID: {pid}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Platform: {platform}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Result: {result}
                </Typography>
            </div>
        );
    }
}
