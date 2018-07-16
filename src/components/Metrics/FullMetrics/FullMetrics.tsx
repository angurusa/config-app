import * as React from 'react';
import axios from '../../../axios';
import Typography from '@material-ui/core/Typography';

import FullMetricsProps from './FullMetricsProps';
import FullMetricsState from './FullMetricsState';
import './FullMetrics.css';

export default class FullMetrics extends React.Component<FullMetricsProps, FullMetricsState> {
    state: FullMetricsState;

    constructor(props: FullMetricsProps) {
        super(props);
        this.state = {
            projectMetrics: {
                avgDuration: 0,
                mttr: 0,
                projectName: '',
                successPercentage: 0
            }
        }
    }

    componentDidMount() {
        this.loadFullMetricsData();
    }

    loadFullMetricsData() {
        axios.get('/metrics/projects/' + this.props.match.params.projectName).then((result) => {
            this.setState(() => ({
                projectMetrics: result.data
            }));
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const {
            avgDuration,
            mttr,
            projectName,
            successPercentage
        } = this.state.projectMetrics
        return (
            <div>
                <Typography variant="title" gutterBottom={true}>
                    Project Metrics Details
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Project Name: {projectName}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Average Duration: {avgDuration}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Mttr: {mttr}
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    Success Percentage: {successPercentage}
                </Typography>
            </div>
        );
    }
}
