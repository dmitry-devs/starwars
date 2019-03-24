import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TooltipHint from '../TooltipHint';

type appProps = {
    data: Array<any>;
    hints: Array<any>;
    countItemsWithPaging: number;
    handleClickOpenDialog: any;
};

export default class TableBodyList extends Component<appProps> {
    render() {
        const { data, hints, handleClickOpenDialog, countItemsWithPaging } = this.props;
        return (
            <TableBody>
                {data.map((row: any, index: number) => {
                    return (
                        <TableRow key={index}>
                            {Object.values(row).map(
                                (key, indx) =>
                                    indx <= 4 && (
                                        <TableCell key={indx}>
                                            <div className={'table__cell-content'}>
                                                {Array.isArray(key) ? key.map(el => `${el} `) : key}
                                                {indx === 0 &&
                                                    hints[index + countItemsWithPaging] && (
                                                        <TooltipHint content={hints[index + countItemsWithPaging]} />
                                                    )}
                                            </div>
                                        </TableCell>
                                    ),
                            )}
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={handleClickOpenDialog(index + countItemsWithPaging)}>
                                    Write hint
                                </Button>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        );
    }
}
