import * as React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import SearchBarProps from './SearchBarProps';
import SearchBarState from './SearchBarState';
import './SearchBar.css';

import * as config from '../../../config';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

    nameSpaces: string[];
    msNames: string[];
    
    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            msName: '',
            namespace: ''
        };
        this.nameSpaces = config.getNameSpaces();
        this.handleChangeNameSpace = this.handleChangeNameSpace.bind(this);
        this.handleChangeMsName = this.handleChangeMsName.bind(this);
    }

    handleChangeNameSpace = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLSelectElement;
        this.msNames = config.getMicroServiceNames(target.value);
        this.setState({ namespace: target.value });
    };

    handleChangeMsName = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLSelectElement;
        this.setState({ msName: target.value });
        this.props.events.onChangeMsName(this.state.namespace, target.value);
    };

    render() {
        return (
            <div className="container">
                <FormControl className="form-control">
                    <InputLabel htmlFor="namespace">Namespace</InputLabel>
                    <Select
                        value={this.state.namespace}
                        onChange={this.handleChangeNameSpace}
                        name="namespace"
                        input={<Input name="namespace" id="namespace" />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {this.nameSpaces.map((namespace, index) => (
                            <MenuItem value={namespace} key={index}>{namespace}</MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Select a namespace</FormHelperText>
                </FormControl>
                {
                    this.state.namespace &&
                    <FormControl className="form-control">
                        <InputLabel htmlFor="msName">Micro service name</InputLabel>
                        <Select
                            value={this.state.msName}
                            onChange={this.handleChangeMsName}
                            name="msName"
                            input={<Input name="msName" id="msName" />}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {this.msNames.map((msName, index) => (
                                <MenuItem value={msName} key={index}>{msName}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Select a micro service</FormHelperText>
                    </FormControl>
                }
            </div>
        );
    }
}
