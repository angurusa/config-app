import * as React from 'react';
import axios from '../../axios';
import { Typography } from '@material-ui/core';

import ProjectsProps, { ProjectData } from './ProjectsProps';
import ProjectsState from './ProjectsState';
import './Projects.css';

import SearchBar from './SearchBar';
import ProjectTable from './ProjectTable';

export default class Projects extends React.Component<ProjectsProps, ProjectsState> {
    state: ProjectsState;
    projects: ProjectData[] = [];

    constructor(props: ProjectsProps) {
        super(props);
        this.state = {
            filterBranchName: '',
            filterProjectName: '',
            update: false
        };
        this.onChangeProjectNameHandler = this.onChangeProjectNameHandler.bind(this);
        this.onChangeBranchNameHandler = this.onChangeBranchNameHandler.bind(this);
    }

    componentDidMount() {
        this.loadProjectData();
    }

    loadProjectData() {
        axios.get('/builds/projects').then((result) => {
            this.projects = result.data.projects;
            this.setState((prevState) => ({
                update: !prevState.update
            }));
        }).catch((err) => {
            console.log(err);
        });
    }

    onChangeProjectNameHandler(projectName: string) {
        this.setState({
            filterProjectName: projectName
        });
    }

    onChangeBranchNameHandler(branchName: string) {
        this.setState({
            filterBranchName: branchName
        });
    }

    render() {
        return (
            <div className="projects">
                <Typography variant="headline" gutterBottom={true}>
                    All Project Build Details
                </Typography>
                <SearchBar
                    events={{
                        onCHangeBranchName: this.onChangeBranchNameHandler,
                        onChangeProjectName: this.onChangeProjectNameHandler
                    }}
                />
                <div className="project-table">
                    <ProjectTable
                        data={{
                            filterBranchName: this.state.filterBranchName,
                            filterProjectName: this.state.filterProjectName,
                            projects: this.projects
                        }}
                    />
                </div>
            </div>
        );
    }
}
