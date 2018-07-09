import * as React from 'react';
import axios from '../../axios';
import { Typography } from '@material-ui/core';

import MetricsProps, { MetricData } from './MetricsProps';
import MetricsState from './MetricsState';
import './Metrics.css';

import SearchBar from './../Projects/SearchBar';
import MetricTable from './MetricTable';

export default class Metrics extends React.Component<MetricsProps, MetricsState> {
    state: MetricsState;
    metrics: MetricData[] = [];

    constructor(props: MetricsProps) {
        super(props);
        this.state = {
            filterProjectName: '',
            update: false
        };
        this.onChangeProjectNameHandler = this.onChangeProjectNameHandler.bind(this);
    }

    componentDidMount() {
        this.loadMetricData();
    }

    loadMetricData() {
        axios.get('/metrics/projects').then((result) => {
            this.metrics = result.data.projects;
            this.setState((prevState) => ({
                update: !prevState.update
            }));
        }).catch((err) => {
            console.log(err);
        });
    }

    onChangeProjectNameHandler(projectName: string) {
        this.setState({
            filterProjectName: projectName
        });
    }

    render() {
        return (
            <div className="metrics">
                <Typography variant="headline" gutterBottom={true}>
                    All Project Metrics Details
                </Typography>
                <SearchBar
                    events={{
                        onChangeProjectName: this.onChangeProjectNameHandler
                    }}
                />
                <div className="metrics-table">
                    <MetricTable
                        data={{
                            filterProjectName: this.state.filterProjectName,
                            metrics: this.metrics
                        }}
                    />
                </div>
            </div>
        );
    }
}
