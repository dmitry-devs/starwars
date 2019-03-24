import React, { Component } from 'react';
import TablePagination from '@material-ui/core/TablePagination';

type appProps = {
    data: Array<any>;
    paging: {
        count: number;
        next: number | null;
        previous: number | null;
    };
    request: any;
    countItemsOnePage: number;
};
type appState = {
    page: number;
    rowsPerPage: number;
};

class Pagination extends Component<appProps, appState> {
    state = {
        page: 0,
        rowsPerPage: this.props.countItemsOnePage || 10,
    };

    handleChangePage = (event: any, page: any) => {
        this.setState({ page });
        this.props.request(page + 1);
    };
    handleChangeRowsPerPage = (event: any) => {
        this.setState({ rowsPerPage: event.target.value });
    };

    render() {
        const { rowsPerPage, page } = this.state;
        const { count } = this.props.paging;
        return (
            <TablePagination
                rowsPerPageOptions={[]}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                component="div"
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
            />
        );
    }
}

export default Pagination;
