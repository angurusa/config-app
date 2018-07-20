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
        const {
            podIp,
            podName,
            status,
            mismatchedProperties
        } = this.props.data.pod;
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="pod-heading">Pod name: {podName}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="pod-details">
                    <Typography>Pod name: {podName}</Typography>
                    <Typography>Pod IP: {podIp}</Typography>
                    <Typography>Status: {status}</Typography>
                    { 
                        (Array.isArray(mismatchedProperties) &&
                        mismatchedProperties.length > 0) &&
                        mismatchedProperties.map((mismatchedProperty, index)=>{
                            return <MismatchedProperties key={index} data={{mismatchedProperty}}/>
                        })
                    }
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}
