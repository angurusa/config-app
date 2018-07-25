import * as React from 'react';
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
            name, expectedValue, actualValue
        } = this.props.data;
        return (
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
        );
    }
}
