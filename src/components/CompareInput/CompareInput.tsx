import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import CompareInputProps from './CompareInputProps';
import CompareInputState from './CompareInputState';
import './CompareInput.css';

import SearchProperties from './SearchProperties';
import * as config from './../../config';
import ShowMicroService from './ShowMicroService';

export default class CompareInput extends React.Component<CompareInputProps, CompareInputState> {

    constructor(props: CompareInputProps) {
        super(props);
        this.state = {
            microServicesData: []
        };
    }

    handleSearchPropertiesSubmit = (properties: string) => {
        const API = config.getAxiosInstance();
        API.post('/env/validatemsenv/', {properties}).then((result) => {
            this.setState(()=>({
                microServicesData: result.data
            }));
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const microServicesData = this.state.microServicesData;
        return (
            <div>
                <Typography variant="headline" gutterBottom={true}>
                    Search for mismatched properties in multiple microservices
                </Typography>
                <SearchProperties data={{}} events={{
                    onSubmitSearchProperties: this.handleSearchPropertiesSubmit
                }} />
                <section className="micro-services">
                    { 
                        (Array.isArray(microServicesData) && microServicesData.length > 0) &&
                        microServicesData.map((msData, index)=>{
                            return (Array.isArray(msData.podEnvPropertyMismatches) && msData.podEnvPropertyMismatches.length > 0) && 
                                <ShowMicroService key={index} data={{msData}} />
                        })
                    }
                </section>
            </div>
        );
    }
}
