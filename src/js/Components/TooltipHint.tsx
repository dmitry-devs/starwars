import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Info';

type appProps = {
    content: string;
};

export default class TooltipHint extends Component<appProps> {
    render() {
        const { content } = this.props;
        return (
            <Tooltip title={content} placement="top">
                <IconButton aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        );
    }
}
