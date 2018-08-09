import * as React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import HomeProps from './HomeProps';
import HomeState from './HomeState';
import './Home.css';

export default class Home extends React.Component<HomeProps, HomeState> {
    render() {
        return (
            <div className="home-root">
                <List>
                    <NavLink to="/single" exact={true}>
                        <ListItem button={true}>
                            <ListItemText primary="Difference between pods for a single microservice" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/multiple" exact={true}>
                        <ListItem button={true}>
                            <ListItemText primary="Search for mismatched properties in multiple microservices" />
                        </ListItem>    
                    </NavLink>
                    <NavLink to="/generate-query" exact={true}>
                        <ListItem button={true} divider={true}>
                            <ListItemText primary="Generate queries" />
                        </ListItem>
                    </NavLink>
                    <Divider />
                </List>
            </div>
        );
    }
}
