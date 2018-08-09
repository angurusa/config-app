import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

import GenerateQueryProps from './GenerateQueryProps';
import GenerateQueryState, { QueryData } from './GenerateQueryState';
import './GenerateQuery.css';
import SearchBar from '../PodDifferences/SearchBar';
import * as config from './../../config';

export default class GenerateQuery extends React.Component<GenerateQueryProps, GenerateQueryState> {
    result: string;

    constructor(props: GenerateQueryProps) {
        super(props);
        this.state = {
            copied: false,
            errorState: false,
            queryData: {
                host: '',
                msName: '',
                namespace: '',
                port: ''
            },
            update: false
        };
    }

    getResult = (input: QueryData[]) => {
        this.setState(()=>({
            errorState: false,
            update: false
        }));

        const API = config.getAxiosInstance();
        API.post('/env/generateDummyQuery/', input).then((result) => {
            this.result = JSON.stringify(result.data);
            this.setState(()=>({
                copied: false,
                errorState: false,
                update: true,
            }));
        }).catch((err) => {
            console.log(err);
            this.setState(()=>({
                errorState: true,
                update: false,
            }));
        });
    }
    
    handleChangePort = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLSelectElement;
        this.setState((prevState: GenerateQueryState) => ({
            queryData: {
                ...prevState.queryData,
                port: target.value
            }
        }));
    };

    handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const host = config.getBaseUrl();
        const { port, namespace, msName } = this.state.queryData;
        const input = [{host,msName,namespace,port}];
        
        this.setState(()=>({
            errorState: false,
        }));

        if (host && port && namespace && msName) {
            this.getResult(input);
        } else {
            this.setState(()=>({
                errorState: true,
            }));
        }
    }

    handleMsNameChange = (namespace: string, msName: string) => {
        this.setState((prevState: GenerateQueryState) => ({
            queryData: {
                ...prevState.queryData,
                msName,
                namespace
            }
        }));
    }

    copyTextHandler = () => {
        this.setState({copied: true});
    }

    render() {
        return (
            <div className="query-container">
                <SearchBar data={{}} events={{onChangeMsName: this.handleMsNameChange}} />
                {
                    this.state.queryData.msName && this.state.queryData.namespace &&
                    <form onSubmit={this.handleSubmit} className="query-form">
                        <div className="query-field">
                            <TextField
                                id="port"
                                label="Enter the port"
                                placeholder="8088"
                                onChange={this.handleChangePort}
                                className="text-field-port"
                                margin="normal"
                            />
                        </div>
                        <div className="query-field">
                            <Button variant="contained" color="primary" type="submit" className="search-button">
                                Search
                            </Button>
                        </div>
                    </form>
                }
                {
                    this.state.errorState &&
                    <div className="error">
                        There is something wrong. Check back later
                    </div>
                }
                {
                    this.state.update &&
                    <div className="query-result">
                        <TextField
                            id="result"
                            value={this.result}
                            multiline={true}
                            rows="10"
                            className="text-field"
                            margin="normal"
                        />
                        <div>
                            <Button variant="contained" color="primary" type="submit" className="search-button">
                                Click to copy
                            </Button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}


// <CopyToClipboard text={this.state.value}
//     onCopy={this.copyTextHandler}>
//     {
//         this.state.copied ?
//         <Button variant="contained" color="primary" type="submit" className="search-button">
//             Click to copy
//         </Button>
//         :
//         <div>
//             Copied
//         </div>
//     }
// </CopyToClipboard>