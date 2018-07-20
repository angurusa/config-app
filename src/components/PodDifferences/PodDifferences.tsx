import * as React from 'react';
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
        this.state = {
            pods: []
        }
        this.handleMsNameChange = this.handleMsNameChange.bind(this);
    }

    handleMsNameChange = (namespace: string, msName: string) => {
        const API = config.getAxiosInstance();
        API.get('env/getMsPodDetails/namespaces/' + namespace + '/ms/' + msName).then((result) => {
            this.setState(()=>({
                pods: result.data.pods
            }));
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const pods = this.state.pods;
        return (
            <div className="pod-differences">
                <Typography variant="headline" gutterBottom={true}>
                    Difference between pods for a single microservice
                </Typography>
                <SearchBar data={{}} events={{onChangeMsName: this.handleMsNameChange}} />
                <section className="pods">
                    { 
                        (Array.isArray(pods) && pods.length > 0) &&
                        pods.map((pod, index)=>{
                            return <Pods key={index} data={{pod}} />
                        })
                    }
                </section>
            </div>
        );
    }
}
