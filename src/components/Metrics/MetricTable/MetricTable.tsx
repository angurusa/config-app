import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MetricTableProps from './MetricTableProps';
import MetricTableState from './MetricTableState';
import './../../Projects/ProjectTable/ProjectTable.css';

export default class MetricTable extends React.Component<MetricTableProps, MetricTableState> {
    constructor(props: MetricTableProps) {
        super(props);
    }

    render() {
        let metrics = this.props.data.metrics;
        const projectName = this.props.data.filterProjectName;
        if (projectName) {
            metrics = metrics.filter((metric)=>{
                    return metric.projectName.includes(projectName);
            });
        }
        return (
            <Paper className="root">
                <Table className="table">
                    <TableHead>
                    <TableRow className="header">
                        <TableCell>Project Name</TableCell>
                        <TableCell numeric={true}>Average Duration</TableCell>
                        <TableCell numeric={true}>Success Percentage</TableCell>
                        <TableCell numeric={true}>MTTR</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        metrics.length > 0 && 
                        metrics.map((metric, index) => {
                        return (
                        <TableRow className="row" key={index}>
                            <TableCell component="th" scope="row">
                            {metric.projectName}
                            </TableCell>
                            <TableCell numeric={true}>{metric.avgDuration}</TableCell>
                            <TableCell numeric={true}>{metric.successPercentage}</TableCell>
                            <TableCell numeric={true}>{metric.mttr}</TableCell>
                        </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
