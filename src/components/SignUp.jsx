import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DatePickers from './Date';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import twitter from '../assests/twitter.png';
import { DialogTitle } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      // margin: theme.spacing(1),
      // width: '25ch',
      // paddingRight: '250px !important',
    },

    '& .MuiLink-underlineHover': {
        marginRight: '5px'
    },

    '& .MuiTypography-h6': {
          display: 'flex',
          justifyContent: 'space-between'
    },
    '& .MuiDialog-paperWidthSm': {
          maxHeight: '605px'
    },
    '& .DatePickers-container-64': {
      paddingBottom: '20px'
    }
  },
  img: {
    width: '35px;',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }, a: {
    paddingLeft: 'none'
  }
});

export default function SignUp(props) {
  const { onClose, open, handlePassword, handleName, handlePhone, handleSignUp } = props;

  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title' className={classes.root}>
      <DialogTitle>
        <div>

        </div>
        <div>
        <img src={twitter} alt='twitter' className={classes.img} />
        </div>
        <div>
        <Button onClick={onClose} onClick={handleSignUp} variant='contained' style={{backgroundColor: '#1b88c7', color: 'white'}}>
          Sign Up
        </Button>
        </div>

      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          <h2 style={{color: 'black'}}>
            <b>Create Your Account</b>{' '}
          </h2>
        </DialogContentText>
        <form className={classes.form}>
            <TextField
            fullWidth
            id='outlined-helperText'
            label='Name'
            onChange={handleName}
            variant='outlined'
          />
        
          <TextField
          style = {{marginTop: '20px', marginBottom: '30px'}}
            fullWidth
            className={classes.root}
            label='Phone'
            id='outlined-helperText'
            onChange={handlePhone}
            variant='outlined'
          />

      <TextField
          style = {{marginTop: '20px', marginBottom: '30px'}}
            fullWidth
            className={classes.root}
            label='Passoword'
            id='outlined-helperText'
            type={'password'}
            onChange={handlePassword}
            variant='outlined'
          />
          <div>
          <p style={{color: '#1b88c7'}}>Use email instead</p>
          </div>
          <DialogContentText>
            <p style={{color: 'black'}}>
              <b>Date of birth </b>
              <br />
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
          </DialogContentText>
          <DatePickers />
        </form>
      </DialogContent>
 
    </Dialog>
  );
}
