import React, { Component } from 'react';
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from '@material-ui/core';

class DialogWrapper extends Component {
    render() {
        const{open,handleClose,title,children,handleSave,btnAction} = this.props;
        console.log('inside DialogWrapper');
        return (
                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        {children}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSave} color="primary">
                           {btnAction}
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

export default DialogWrapper;