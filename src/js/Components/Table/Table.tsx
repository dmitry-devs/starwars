import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeadList from './TableHeadList';
import TableBodyList from './TableBodyList';
import Dialogs from '../Dialog';
import LocalStorage from '../../actions/LocalStorage';

type appProps = {
    data: Array<any>;
    query: {
        search: string;
        page: number;
    };
    paging: {
        count: number;
        next: number | null;
        previous: number | null;
    };
    item: string;
    countItemsOnePage: number;
};
type appState = {
    stateDialog: boolean;
    hints: Array<any>;
    hint: string;
    dialogIndex: number;
};
export default class Tables extends Component<appProps, appState> {
    constructor(props: appProps) {
        super(props);
        const hintsLocalStorage = LocalStorage.loadStorage(this.props.item);
        this.state = {
            stateDialog: false,
            hints: Array.isArray(hintsLocalStorage) ? hintsLocalStorage : new Array(this.props.paging.count),
            hint: '',
            dialogIndex: 0,
        };
    }
    countItemsWithPaging(): number {
        return (this.props.query.page - 1) * this.props.countItemsOnePage;
    }
    handleClickOpenDialog = (index: number) => () => {
        const hint = this.state.hints[index] ? this.state.hints[index] : '';
        this.setState({ hint, dialogIndex: index, stateDialog: true });
    };
    handleClickCloseDialog = (value?: string) => {
        if (this.state.dialogIndex <= this.state.hints.length && value !== undefined) {
            const hints = [...this.state.hints];
            hints[this.state.dialogIndex] = value;
            this.setState({ ...this.state, hints, hint: value });
            LocalStorage.saveStorage(this.props.item, hints);
        }
        this.setState({ stateDialog: false });
    };
    render() {
        const { data } = this.props;
        const { hints, hint, stateDialog } = this.state;
        return (
            <Paper>
                {data.length && (
                    <div className={'table'}>
                        <Table className={'table__content'}>
                            <TableHeadList data={data} />
                            <TableBodyList
                                data={data}
                                hints={hints}
                                countItemsWithPaging={this.countItemsWithPaging()}
                                handleClickOpenDialog={this.handleClickOpenDialog}
                            />
                        </Table>
                        <Dialogs open={stateDialog} value={hint} onClose={this.handleClickCloseDialog} />
                    </div>
                )}
            </Paper>
        );
    }
}
