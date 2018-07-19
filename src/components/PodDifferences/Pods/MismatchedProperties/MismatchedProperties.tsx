import * as React from 'react';
import MismatchedPropertiesProps from './MismatchedPropertiesProps';
import MismatchedPropertiesState from './MismatchedPropertiesState';
import './MismatchedProperties.css';
import Typography from '@material-ui/core/Typography';

export default class MismatchedProperties extends React.Component<MismatchedPropertiesProps, MismatchedPropertiesState> {
    render() {
        return (
            <div>
                <Typography>Something</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </div>
        );
    }
}
