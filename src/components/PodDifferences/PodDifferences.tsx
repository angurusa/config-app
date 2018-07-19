import * as React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

import PodDifferencesProps from './PodDifferencesProps';
import PodDifferencesState from './PodDifferencesState';
import './PodDifferences.css';

import SearchBar from './SearchBar';
import * as config from './../../config';
import Pods from './Pods';

export default class PodDifferences extends React.Component<PodDifferencesProps, PodDifferencesState> {

    constructor(props: PodDifferencesProps) {
        super(props);
        this.handleMsNameChange = this.handleMsNameChange.bind(this);
    }

    handleMsNameChange = (namespace: string, msName: string) => {
        console.log(namespace + ' ' + msName);
        const API = config.getAxiosInstance();
        API.get('env/getMsPodDetails/namespaces/' + namespace + '/ms/' + msName).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="pod-differences">
                <Typography variant="headline" gutterBottom={true}>
                    Difference between pods for a single microservice
                </Typography>
                <SearchBar data={{}} events={{onChangeMsName: this.handleMsNameChange}} />
                <section className="pods">
                    <Pods data={{}} />
                </section>
            </div>
        );
    }
}
