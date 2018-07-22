import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ShowPropertyMismatchProps from './ShowPropertyMismatchProps';
import ShowPropertyMismatchState from './ShowPropertyMismatchState';
import './ShowPropertyMismatch.css';

export default class ShowPropertyMismatch extends React.Component<ShowPropertyMismatchProps, ShowPropertyMismatchState> {
    render() {
        const {
            podName, podIp, name, expectedValue, actualValue
        } = this.props.data.propertyMismatch;
        return (
            <ExpansionPanel className="panel">
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="pod-heading">Pod name: {podName}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="pod-details">
                    <Typography>Pod name: {podName}</Typography>
                    <Typography>Pod IP: {podIp}</Typography>
                    <Paper className="mismatched-property">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name: {name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Expected Value: {expectedValue}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Actual Value: {actualValue}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}
