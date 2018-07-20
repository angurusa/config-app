import * as React from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import IDSEProps from './IDSEProps';
import IDSEState from './IDSEState';
import './IDSE.css';

import * as config from './../../config';
import PodDifferences from './../PodDifferences';

export default class IDSE extends React.Component<IDSEProps, IDSEState> {
    
    envArray: string[];

    constructor(props: IDSEProps) {
        super(props);
        const env = config.getCurrentEnv();
        this.state = {
            env
        };
        this.envArray = config.getEnvArray();
    }

    handleChange = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLSelectElement;
        localStorage.setItem('env', target.value);
        this.setState({ env: target.value });
    };

    render() {
        return (
            <div className="root">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className="flex">
                            IDSE Project Details
                        </Typography>
                        <FormControl className="environment">
                            <NativeSelect
                                value={this.state.env}
                                onChange={this.handleChange}
                                name="env"
                                className="select-empty"
                            >
                                {this.envArray.map((env, index)=>(
                                    <option value={env} key={index}>{env.toUpperCase()}</option>
                                ))}
                            </NativeSelect>
                        </FormControl>
                    </Toolbar>
                </AppBar>
                <section>
                <PodDifferences data={{}} />
                    <Switch>
                        {/* <Route path="/" exact={true} component={Projects} /> */}
                        {/* <Route path="/projects" exact={true} component={Projects} />
                        <Route path="/metrics" exact={true} component={Metrics} />
                        <Route path="/metrics/:projectName" exact={true} component={FullMetrics} />
                        <Route path="/projects/:projectName/branch/:branchName" exact={true} component={FullProject} />
                        <Redirect from="/" to="/projects" /> */}
                    </Switch>
                </section>
            </div>
        );
    }
}
