import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';

import ProjectTableProps from './ProjectTableProps';
import ProjectTableState from './ProjectTableState';
import './ProjectTable.css';

export default class ProjectTable extends React.Component<ProjectTableProps, ProjectTableState> {

    constructor(props: ProjectTableProps) {
        super(props);
    }

    render() {
        let projects = this.props.data.projects;
        const projectName = this.props.data.filterProjectName;
        const branchName = this.props.data.filterBranchName;
        if (projectName || branchName) {
            projects = projects.filter((project)=>{
                if(projectName && branchName) {
                    return project.projectName.includes(projectName) && project.branchName.includes(branchName);
                } else {
                    return project.projectName.includes(projectName);
                }
            });
        }
        return (
            <Paper className="root">
                <Table className="table">
                    <TableHead>
                    <TableRow className="header">
                        <TableCell>Project Name</TableCell>
                        <TableCell>Project Version</TableCell>
                        <TableCell>Branch Name</TableCell>
                        <TableCell numeric={true}>Duration</TableCell>
                        <TableCell>Result</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        projects.length > 0 && 
                        projects.map((project, index) => {
                        return (
                        <TableRow className="row" key={index}>
                            <TableCell component="th" scope="row">
                            <NavLink to={'/projects/' + project.projectName + '/branch/' + project.branchName}>
                                {project.projectName}
                            </NavLink>
                            </TableCell>
                            <TableCell>{project.projectVersion}</TableCell>
                            <TableCell>{project.branchName}</TableCell>
                            <TableCell numeric={true}>{project.duration}</TableCell>
                            <TableCell>{project.result}</TableCell>
                        </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
