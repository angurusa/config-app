import * as React from 'react';
import axios from '../../axios';

import ProjectsProps from './ProjectsProps';
import ProjectsState from './ProjectsState';
import './Projects.css';

import Project from './Project';

export default class Projects extends React.Component<ProjectsProps, ProjectsState> {
    state: ProjectsState;

    constructor(props: ProjectsProps) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get('/builds/projects').then((result) => {
            console.log(result);
            this.setState({
                projects: result.data.projects
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h1>Project details:</h1>
                {
                    this.state.projects.length > 0 && 
                    this.state.projects.map((project, index) => {
                        return <Project key={index} data={{project}} />
                    })
                }
            </div>
        );
    }
}
