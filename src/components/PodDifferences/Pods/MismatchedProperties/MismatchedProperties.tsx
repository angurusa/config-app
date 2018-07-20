import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MismatchedPropertiesProps from './MismatchedPropertiesProps';
import MismatchedPropertiesState from './MismatchedPropertiesState';
import './MismatchedProperties.css';

export default class MismatchedProperties extends React.Component<MismatchedPropertiesProps, MismatchedPropertiesState> {
    render() {
        const {
            name,
            value
        } = this.props.data.mismatchedProperty;
        return (
            <Paper className="mismatched-property">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name: {name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Value: {value}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
