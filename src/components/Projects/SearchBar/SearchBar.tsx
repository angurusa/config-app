import * as React from 'react';
import TextField from '@material-ui/core/TextField';

import SearchBarProps from './SearchBarProps';
import SearchBarState from './SearchBarState';
import './SearchBar.css';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

    constructor(props: SearchBarProps) {
        super(props);
        this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
        this.handleBranchNameChange = this.handleBranchNameChange.bind(this);
    }

    handleProjectNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.events.onChangeProjectName(event.currentTarget.value);
    }

    handleBranchNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (this.props.events.onCHangeBranchName) {
            this.props.events.onCHangeBranchName(event.currentTarget.value);
        }
    }

    render() {
        return (
            <div className="container">
                <TextField
                    label="Project Name"
                    // defaultValue={this.props.data.filterProjectName}
                    placeholder="idse-app-shell"
                    className="text-field"
                    helperText="Enter a project name to filter"
                    onChange={this.handleProjectNameChange}
                />
                {this.props.events.onCHangeBranchName &&
                <TextField
                    label="Branch Name"
                    // defaultValue={this.props.data.filterBranchName}
                    placeholder="master"
                    className="text-field"
                    helperText="Enter a branch name to filter"
                    margin="normal"
                    onChange={this.handleBranchNameChange}
                />}
            </div>
        );
    }
}
