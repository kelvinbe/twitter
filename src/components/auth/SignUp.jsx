import React, {useState} from 'react';
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
import twitter from '../../assests/twitter.png';
import { DialogTitle } from '@material-ui/core';
import axios from 'axios';
import Toolbar from '@material-ui/core/Toolbar';
import { useAuth } from './AuthContext';
import {useHistory} from 'react-router-dom'



const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      // margin: theme.spacing(1),
      // width: '25ch',
      // paddingRight: '250px !important',
    },

    '& .MuiLink-underlineHover': {
      marginRight: '5px',
    },

    '& .MuiTypography-h6': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '& .MuiDialog-paperWidthSm': {
      maxHeight: '605px',
    },
    '& .DatePickers-container-64': {
      paddingBottom: '20px',
    },
  },
  img: {
    width: '35px;',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  a: {
    paddingLeft: 'none',
  },
});

export default function SignUp(props) {
  const {
    onClose,
    open,
    handlePassword,
    handlePhone,
    password,
    email
  } = props;

  const classes = useStyles();

  const { signup } = useAuth()
  const history = useHistory()

  const [loading, setLoading] = useState(false)

  console.log('passwordddd', password)
  console.log('phoneeeeeee', email)


 const handleSignUp = async (e) => {
   if(!password || !email){
    return alert('Missing fields!')
   }

   if(password.length < 6){
     return alert('password cant be less than 6 characters')
   }
  e.preventDefault()

  try{
    setLoading(true)
   await signup(email, password)
   history.push('/login')


  }catch{
  }
  setLoading(false)
}



  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='form-dialog-title'
      className={classes.root}
    >
      <DialogTitle>
        <div></div>
        <div>
          <img src={twitter} alt='twitter' className={classes.img} />
        </div>
        <div>
          <Button
            disabled={loading}
            onClose={onClose}
            onClick={handleSignUp}
            variant='contained'
            style={{ backgroundColor: '#1b88c7', color: 'white' }}
          >
            Sign Up
          </Button>
        </div>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          <h2 style={{ color: 'black' }}>
            <b>Create Your Account</b>{' '}
          </h2>
        </DialogContentText>
        <form className={classes.form}>

          <TextField
            style={{ marginTop: '20px', marginBottom: '30px' }}
            fullWidth
            className={classes.root}
            label='Email'
            id='outlined-helperText'
            onChange={handlePhone}
            variant='outlined'
          />

          <TextField
            style={{ marginTop: '20px', marginBottom: '30px' }}
            fullWidth
            className={classes.root}
            label='Password'
            id='outlined-helperText'
            type={'password'}
            onChange={handlePassword}
            required
            variant='outlined'
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
