import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PodsProps from './PodsProps';
import PodsState from './PodsState';
import './Pods.css';

import MismatchedProperties from './MismatchedProperties';

export default class Pods extends React.Component<PodsProps, PodsState> {
    render() {
        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="pod-heading">Pod Name: Something</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="pod-details">
                        <Typography>Pod Name: Something</Typography>
                        <Typography>Pod IP: Something</Typography>
                        <Typography>Status: Something</Typography>
                        <MismatchedProperties data={{}} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}
