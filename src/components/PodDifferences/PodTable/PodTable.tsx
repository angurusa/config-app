import * as React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import PodTableProps from './PodTableProps';
import PodTableState from './PodTableState';
import './PodTable.css';

export default class PodTable extends React.Component<PodTableProps, PodTableState> {
    render() {
        return (
            <TableBody className="table-body">            
                <TableRow>
                    <TableCell className="pod-header">
                        <div>Pod name: {this.props.data.pod.podName}</div>
                        <div>Pod IP: {this.props.data.pod.podIp}</div>
                        <div>Status: {this.props.data.pod.status}</div>
                    </TableCell>
                </TableRow>
                {
                    this.props.data.pod.mismatchedProperties.map((property, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell> {property.value} </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        );
    }
}
