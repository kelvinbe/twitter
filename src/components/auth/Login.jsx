import React, {useState} from 'react';
import twitter from '../../assests/twitter.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styles from './login.styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import api from '../../api'
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from './AuthContext';
// import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
root: {
  display: 'flex',
  flexDirection: 'column',
  '& .MuiTextField-root': {
    width: '35ch',
  },
  marginTop: '50px'

},
login: {
  background: '#1b88c7',
  border: 0,
  borderRadius: 48,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '15px 133px',
  marginBottom: '30px',
  width: '42ch',
  marginTop: '24px'
},
form: {
    display: 'flex',
    justifyContent: 'center'
},
link: {
  color: '#1b88c7',
},
align: {
  textAlign: 'center'

}

}))


const Login = () => {
const [password, setPassword] = useState('')
const [email, setEmail] = useState('')
const [open, setOpen] = React.useState(false);
const [error, setError] = useState('')


const history = useHistory()

const  handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 const handlePhoneChange = (e) => {
    setEmail(e.target.value);

  };



 
const { login } = useAuth()
const [loading, setLoading] = useState(false)
  
const handleLogin = async (e) => {
     if(!password || !email){

      return setError('Missing required fields')
     }
    e.preventDefault()
  
    try{
    setError('')
    setOpen(false)

    setLoading(true)
    await login(email, password)
    history.push('/tweetpage')
  
    }catch{
      setError('Failed to sign in')
    }
    setLoading(false)
    setError('')

  }

  const handleClose = () => {
      setError('')
    }
    


    const classes = useStyles();
    return (
      <div className={classes.form}>
        <form className={classes.root}>
          <div>
            <img src={twitter} alt='twitter' className={'twitter-logo'} />
          </div>
          <div>
            <span>
              <h1>Log in to Twitter</h1>
            </span>
          </div>
          {error && <Alert onClick={handleClose} severity="error">{error}</Alert>}

          <TextField
            style={{ marginTop: '30px' }}
            id='outlined-basic'
            label='Email'
            variant='outlined'
            value={email}
            type={'email'}
            onChange={handlePhoneChange}
          />

          <TextField
            style={{ marginTop: '30px' }}
            id='outlined-basic'
            label='Password'
            variant='outlined'
            value={password}
            type={'password'}
            onChange={handlePasswordChange}
          />

          
          <Button
            color='primary'
            className={classes.login}
            onClick={handleLogin}
          >
            Log in
          </Button>
          <div className={classes.align}>
            <span>
              <Link to="/signup" className={classes.link}>
                Sign up for Twitter
              </Link>
            </span>
          </div>
        </form>
      </div>
    );
}

export default withStyles(styles)(Login);
