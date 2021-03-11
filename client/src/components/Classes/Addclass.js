import React, {useRef} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './style/addclass.css';
import { Row, Col } from 'react-bootstrap';


import { useMutation } from '@apollo/client';
import {AddClass} from '../../mutations/classmutation';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {

  const [open, setOpen] = React.useState(false);
  const className = useRef();

  const [AddCla] = useMutation(AddClass);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function AddClassSubmit(event){
    event.preventDefault();
    console.log(className.current.value);
    
    AddCla(
      {
        variables:{
          classNameInput: className.current.value, 
        }
      }
    )
    
    setOpen(false);
  }

  return (
    <div className='INLINESTYLE'>
      <Button onClick={handleClickOpen} className='AddNewBTN'>
        Add New Class
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add New Class"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='AddUserMain'>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <input placeholder='Class Name' ref={className} />
                </Col>
              </Row>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={AddClassSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
