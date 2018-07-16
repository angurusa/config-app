import * as React from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import IDSEProps from './IDSEProps';
import IDSEState from './IDSEState';
import './IDSE.css';

import Projects from '../Projects';
import Metrics from '../Metrics';
import FullMetrics from '../Metrics/FullMetrics';
import FullProject from '../Projects/FullProject';

export default class IDSE extends React.Component<IDSEProps, IDSEState> {
    render() {
        const linkStyle = {
            textDecoration: 'none'
        };
        const buttonStyle = {
            color: 'white'
        }
        return (
            <div className="root">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className="flex">
                            IDSE Project Details
                        </Typography>
                        <NavLink to="/projects" exact={true} style={linkStyle}>
                            <Button style={buttonStyle}>Projects</Button>
                        </NavLink>
                        <NavLink to="/metrics" exact={true} style={linkStyle}>
                            <Button style={buttonStyle}>Metrics</Button>
                        </NavLink>
                    </Toolbar>
                </AppBar>
                <section>
                    <Switch>
                        {/* <Route path="/" exact={true} component={Projects} /> */}
                        <Route path="/projects" exact={true} component={Projects} />
                        <Route path="/metrics" exact={true} component={Metrics} />
                        <Route path="/metrics/:projectName" exact={true} component={FullMetrics} />
                        <Route path="/projects/:projectName/branch/:branchName" exact={true} component={FullProject} />
                        <Redirect from="/" to="/projects" />
                    </Switch>
                </section>
            </div>
        );
    }
}
