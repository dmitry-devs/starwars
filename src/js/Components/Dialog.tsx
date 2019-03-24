import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type appProps = {
    open: boolean;
    onClose: (value?: string) => void;
    value: string;
};
type appState = {
    value: string;
};

export default class Dialogs extends Component<appProps, appState> {
    state = {
        value: '',
    };
    componentDidUpdate() {
        const propValue = this.props.value;
        const { value } = this.state;
        if (propValue && propValue !== value && !value.length && this.props.open) {
            this.setState({ value: propValue });
        }
    }
    handleClose = () => {
        this.props.onClose();
        this.clearField();
    };
    handleSave = () => {
        this.props.onClose(this.state.value);
        this.clearField();
    };
    handleChange = () => (event: any) => {
        this.setState({ value: event.target.value });
    };
    clearField = () => {
        this.setState({ value: '' });
    };
    render() {
        const { open } = this.props;
        return (
            <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Hint</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={this.state.value}
                        onChange={this.handleChange()}
                        label="Hint"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
