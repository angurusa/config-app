import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import PodDifferencesProps, { Pod } from './PodDifferencesProps';
import PodDifferencesState from './PodDifferencesState';
import './PodDifferences.css';

import SearchBar from './SearchBar';
import * as config from './../../config';
import Pods from './Pods';
import PodTable from './PodTable';

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
                    <Paper className="data-paper">
                        <Table className="data-table" style={{display: 'flex'}}>
                            {
                                (Array.isArray(pods) && pods.length > 0) &&
                                this.getFirstColumn(pods[0])
                            }
                            { 
                                (Array.isArray(pods) && pods.length > 0) &&
                                pods.map((pod, index)=>{
                                    // return <Pods key={index} data={{pod}} />
                                    return <PodTable key={index} data={{pod}} />
                                })
                            }
                        </Table>
                    </Paper>
                </section>
            </div>
        );
    }

    getFirstColumn(pod: Pod) {
        return (
            <TableBody style={{background: 'lightblue'}}>            
                <TableRow>
                    <TableCell className="table-cell"> Pod Name: </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="table-cell"> Pod IP: </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="table-cell"> Status: </TableCell>
                </TableRow>
                {
                    pod.mismatchedProperties.map((property, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="table-cell"> {property.name} </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        );
    }

}
