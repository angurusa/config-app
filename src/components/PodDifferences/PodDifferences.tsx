import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import PodDifferencesProps, { Pod, PodDetails } from './PodDifferencesProps';
import PodDifferencesState from './PodDifferencesState';
import './PodDifferences.css';

import SearchBar from './SearchBar';
import * as config from './../../config';
import PodTable from './PodTable';
import { TableHead } from '@material-ui/core';

export default class PodDifferences extends React.Component<PodDifferencesProps, PodDifferencesState> {
    firstRow: PodDetails[];

    constructor(props: PodDifferencesProps) {
        super(props);
        this.state = {
            errorState: false,
            pods: []
        }
        this.handleMsNameChange = this.handleMsNameChange.bind(this);
        this.getFirstRow = this.getFirstRow.bind(this);
    }

    handleMsNameChange = (namespace: string, msName: string) => {
        this.setState(()=>({
            errorState: false
        }));
        const API = config.getAxiosInstance();
        API.get('/env/getMsPodDetails/namespaces/' + namespace + '/ms/' + msName).then((result) => {
            this.setState(()=>({
                errorState: false,
                pods: result.data.pods
            }));
        }).catch((err) => {
            console.log(err);
            this.setState(()=>({
                errorState: true,
                pods: [],
            }));
        });
    }

    render() {
        const pods = this.state.pods;
        const transposedPods = this.transposeArray(pods);
        const statusSwitch = false;
        return (
            <div className="pod-differences">
                <Typography variant="headline" gutterBottom={true}>
                    Difference between pods for a single microservice
                </Typography>
                <SearchBar data={{}} events={{onChangeMsName: this.handleMsNameChange}} />
                {
                    this.state.errorState &&
                    <div className="error">
                        There is something wrong. Check back later
                    </div>
                }
                {
                    (Array.isArray(pods) && pods.length > 0) &&
                    <section className="pods">
                        <Paper className="data-paper">
                            <div style={{overflowX: 'auto'}}>
                                <Table className="data-table">
                                    {
                                        this.getFirstRow(pods)
                                    }
                                    <TableBody>
                                        { 
                                            transposedPods.map((pod, index)=>{
                                                return <PodTable key={index} data={{pod}} />
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                        </Paper>
                    </section>
                }
                    {
                        statusSwitch &&
                        <section className="status-section">
                            {
                                this.firstRow && this.firstRow.length > 0 &&
                                this.firstRow.map((pod, i) => {
                                    return (
                                        <div key={i} className="pod-status">
                                            {pod.podName} : {this.getStatus(pod.status)}
                                        </div>
                                    )
                                })
                            }
                        </section>
                    }
            </div>
        );
    }

    // This is pure magic in just 4 lines of code. DON'T TOUCH IT
    transposeArray = (pods: Pod[]) => {
        if(Array.isArray(pods) && pods.length > 0) {
            const propertyNames = pods[0].mismatchedProperties.map(prop => prop.name);
            const podValues = pods.map(pod => pod.mismatchedProperties.map(prop => prop.value));
            const podsArray = [propertyNames, ...podValues];
            return podsArray[0].map((col, i) => podsArray.map(row => row[i]));
        } else {
            return [];
        }
    }

    getFirstRow(pods: Pod[]) {
        this.firstRow = pods.map(pod => ({podName: pod.podName, podIp: pod.podIp, status: pod.status}));
        return (
            <TableHead>
                <TableRow>
                    <TableCell className="table-cell pod-header">
                        Pod Details / Properties
                    </TableCell>
                    {
                        this.firstRow.map((pod, index) => {
                            return (
                                <TableCell key={index} className="table-cell pod-header">
                                    Pod Name: {pod.podName} <br />
                                    Pod Ip: {pod.podIp} <br />
                                    Status: {pod.status}
                                </TableCell>
                            )
                        })
                    }
                </TableRow>
            </TableHead>
        );
    }

    getStatus(status: string) {
        const style = (status === 'Running') ? 'bulb bulb-on' : 'bulb bulb-off';
        return (
            <div className={style}/>
        );
    }

}
