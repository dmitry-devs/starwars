import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

type appProps = {
    item: string;
    request: any;
};

class Filter extends Component<appProps> {
    handleChange = (event: any) => {
        this.props.request(event.target.value);
    };

    render() {
        return (
            <div className={'app__search'}>
                <TextField id="standard-search" label="Search field" type="search" onChange={this.handleChange} />
            </div>
        );
    }
}
export default Filter;
