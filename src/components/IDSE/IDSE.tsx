import * as React from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';

import IDSEProps from './IDSEProps';
import IDSEState from './IDSEState';
import './IDSE.css';

import * as config from './../../config';
import PodDifferences from './../PodDifferences';
import CompareInput from './../CompareInput';
import Home from '../Home';

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
        const environment = {
            marginLeft: 20
        };
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
                        <NavLink to="/home" exact={true} style={linkStyle}>
                            <Button style={buttonStyle}>Home</Button>
                        </NavLink>
                        <FormControl style={environment}>
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
                <section className="app-body">
                    <Switch>
                        <Route path="/home" exact={true} component={Home} />                        
                        <Route path="/single" exact={true} component={PodDifferences} />
                        <Route path="/multiple" exact={true} component={CompareInput} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </section>
            </div>
        );
    }
}
