import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import IDSEProps from './IDSEProps';
import IDSEState from './IDSEState';
import './IDSE.css';

import Projects from '../Projects';
import Metrics from '../Metrics';

export default class IDSE extends React.Component<IDSEProps, IDSEState> {
    render() {
        return (
            <div className="IDSE">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Projects</Link></li>
                            <li><Link to="/Metrics">Metrics</Link></li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <Route path="/" exact={true} component={Projects} />
                    <Route path="/Metrics" exact={true} component={Metrics} />
                </section>
            </div>
        );
    }
}
