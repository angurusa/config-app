import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import ShowMicroServiceProps from './ShowMicroServiceProps';
import ShowMicroServiceState from './ShowMicroServiceState';
import './ShowMicroService.css';
import ShowPropertyMismatch from './ShowPropertyMismatch';

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
                        (Array.isArray(podEnvPropertyMismatches) && podEnvPropertyMismatches.length > 0) &&
                        podEnvPropertyMismatches.map((propertyMismatch, index)=>{
                            return <ShowPropertyMismatch key={index} data={{propertyMismatch}} />
                        })
                    }
                </section>
            </div>
        );
    }
}
