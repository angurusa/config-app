import * as React from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import IDSEProps from './IDSEProps';
import IDSEState from './IDSEState';
import './IDSE.css';

import { getEnvArray, getCurrentEnv, getBaseUrl } from './../../config';

export default class IDSE extends React.Component<IDSEProps, IDSEState> {
    
    envArray: string[];
    baseURL: string;

    constructor(props: IDSEProps) {
        super(props);
        const env = getCurrentEnv();
        this.state = {
            env
        };
        this.envArray = getEnvArray();
        this.setBaseUrl(env);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    setBaseUrl(env: string) {
        this.baseURL = getBaseUrl(env);
    }

    handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const selectedValue = event.currentTarget.value;
        localStorage.setItem('env', selectedValue);
        this.setBaseUrl(selectedValue);
        this.setState({ env: selectedValue });
    };

    onButtonClick() {
        axios({
            baseURL: this.baseURL,
            method: 'get',
            url: '/user'
        }).then((res) => {
            console.log(res);
        });
    }

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
                        {/* <NavLink to="/projects" exact={true} style={linkStyle}>
                            <Button style={buttonStyle}>Projects</Button>
                        </NavLink>
                        <NavLink to="/metrics" exact={true} style={linkStyle}>
                            <Button style={buttonStyle}>Metrics</Button>
                        </NavLink> */}
                        <button onClick={this.onButtonClick}>CLick Here</button>
                        <FormControl className="form-control">
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
