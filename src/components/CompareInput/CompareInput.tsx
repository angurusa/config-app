import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import CompareInputProps, { PodEnvPropertyMismatch, MicroServiceOriginalData } from './CompareInputProps';
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
        const headers = {
            'Content-Type': 'application/json',
        }
        API.post('/env/validatemsenv/', properties, {headers}).then((result) => {
            const transformedData = result.data.map((singleData: MicroServiceOriginalData) => {
                return {
                    msName: singleData.msName,
                    podEnvPropertyMismatches: this.transformArrayToObject(singleData.podEnvPropertyMismatches)
                };
            });
            this.setState(()=>({
                microServicesData: transformedData
            }));
        }).catch((err) => {
            this.setState(()=>({
                microServicesData: []
            }));
            console.log(err);
        });
    }

    transformArrayToObject(arr: PodEnvPropertyMismatch[]) {
        const resultArr = {};
        for (const element of arr) {
            if (resultArr[element.podName]) {
                resultArr[element.podName].push(element);
            } else {
                resultArr[element.podName] = [element];
            }
        }
        return resultArr;
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
                            // return (Array.isArray(msData.podEnvPropertyMismatches) && msData.podEnvPropertyMismatches.length > 0) && 
                                return <ShowMicroService key={index} data={{msData}} />
                        })
                    }
                </section>
            </div>
        );
    }
}
