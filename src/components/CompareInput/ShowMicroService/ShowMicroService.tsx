import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ShowMicroServiceProps from './ShowMicroServiceProps';
import ShowMicroServiceState from './ShowMicroServiceState';
import './ShowMicroService.css';
import ShowPropertyMismatch from './ShowPropertyMismatch';
import { TransformedMismatches } from '../CompareInputProps';

export default class ShowMicroService extends React.Component<ShowMicroServiceProps, ShowMicroServiceState> {
    render() {
        const {
            msName,
            podEnvPropertyMismatches
        } = this.props.data.msData;
        return (
            <div className="show-micro-service">
                <Typography variant="title" gutterBottom={true}>
                    {msName}
                </Typography>
                <section className="pods">
                    { 
                        this.getMismatchProperty(podEnvPropertyMismatches)
                    }
                </section>
            </div>
        );
    }

    getMismatchProperty(mismatches: TransformedMismatches) {
        return Object.keys(mismatches).map((key) => {
            return (
                <div key={key} className="single-pod">
                    <ExpansionPanel className="panel">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="pod-heading">Pod name: {key}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="pod-details">
                            <Typography>Pod name: {mismatches[key][0].podIp}</Typography>
                            <Typography>Pod IP: {mismatches[key][0].podIp}</Typography>
                            {
                                (Array.isArray(mismatches[key]) && mismatches[key].length > 0) &&
                                mismatches[key].map((mismatch, index) => {
                                    return <ShowPropertyMismatch key={index} data={mismatch} />
                                })
                            }
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            )
        });
    }

}
