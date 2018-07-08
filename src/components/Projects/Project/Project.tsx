import * as React from 'react';
import ProjectProps from './ProjectProps';
import ProjectState from './ProjectState';
import './Project.css';

export default class Project extends React.Component<ProjectProps, ProjectState> {
    render() {
        return (
            <div>
                <h3>{this.props.data.project.projectName}</h3>
                <h3>{this.props.data.project.branchName}</h3>
            </div>
        );
    }
}
