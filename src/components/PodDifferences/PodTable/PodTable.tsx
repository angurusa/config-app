import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import PodTableProps from './PodTableProps';
import PodTableState from './PodTableState';
import './PodTable.css';

export default class PodTable extends React.Component<PodTableProps, PodTableState> {
    render() {
        return (       
            <TableRow>
                {
                    this.props.data.pod.map((props, index) => {
                        return (
                            <TableCell key={index} className="table-cell">
                                {props}
                            </TableCell>
                        )
                    })
                }
            </TableRow>
        );
    }
}
