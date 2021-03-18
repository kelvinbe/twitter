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

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      // margin: theme.spacing(1),
      // width: '25ch',
      // paddingRight: '250px !important',
    },

    '& .MuiLink-underlineHover': {
        marginRight: '5px'
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
  const { onClose, open } = props;

  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <DialogTitle align='center'>
        <img src={twitter} alt='twitter' className={classes.img} />
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          <h2>
            <b>Create Your Account</b>{' '}
          </h2>
        </DialogContentText>
        <form className={classes.form}>
            <TextField
            fullWidth
            id='outlined-helperText'
            label='Name'
            variant='outlined'
          />
        
          <TextField
          style = {{marginTop: '20px', marginBottom: '30px'}}
            fullWidth
            className={classes.root}
            label='Phone'
            id='outlined-helperText'
            variant='outlined'
          />
          <div>
          <p style={{color: '#1b88c7'}}>Use email instead</p>
          </div>
          <DialogContentText>
            <p>
              <b>Date of birth </b>
              <br />
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
          </DialogContentText>
          <DatePickers />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant='contained' color='secondary'>
          Cancel
        </Button>
        <Button onClick={onClose} variant='contained' color='primary'>
          Next
        </Button>
      </DialogActions>
    </Dialog>
  );
}
