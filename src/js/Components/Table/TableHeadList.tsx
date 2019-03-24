import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

type appProps = {
    data: Array<any>;
};
export default class TableHeadList extends Component<appProps> {
    getFormatValueTable(value: string): string {
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return value.replace(/_/g, ' ');
    }
    render() {
        const { data } = this.props;
        return (
            <TableHead>
                <TableRow>
                    {Object.keys(data[0]).map(
                        (key, index) =>
                            index <= 4 && <TableCell key={index}>{this.getFormatValueTable(key)}</TableCell>,
                    )}
                    <TableCell>Hint</TableCell>
                </TableRow>
            </TableHead>
        );
    }
}
