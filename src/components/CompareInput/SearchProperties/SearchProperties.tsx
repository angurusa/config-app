import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SearchPropertiesProps from './SearchPropertiesProps';
import SearchPropertiesState from './SearchPropertiesState';
import './SearchProperties.css';

export default class SearchProperties extends React.Component<SearchPropertiesProps, SearchPropertiesState> {

    constructor(props: SearchPropertiesProps) {
        super(props);
        this.state = {
            properties: ''
        };
    }
    
    handleChangeProperties = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLSelectElement;
        this.setState({
            properties: target.value
        });
    };

    handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const properties = this.state.properties;
        if (properties) {this.props.events.onSubmitSearchProperties(properties)};
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="search-form">
                <TextField
                    id="properties"
                    label="Enter your properties"
                    multiline={true}
                    placeholder="Enter an array of properties"
                    rows="10"
                    onChange={this.handleChangeProperties}
                    className="text-field"
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit" className="search-button">
                    Search
                </Button>
            </form>
        );
    }
}
