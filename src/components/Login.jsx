import React, {Component} from 'react'
import twitter from '../assests/twitter.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styles from './login.styles'
import Button from '@material-ui/core/Button';




class Login extends Component { 

    render(){ 
        const {classes} = this.props
        return (
          <div className={classes.form}>
      <form  className={classes.root}>
        <div>
        <img src={twitter} alt='twitter' className={'twitter-logo'} />
      </div>
      <div>
        <span><h1>Log in to Twitter</h1></span>
      </div>
        <TextField id="outlined-basic" label="Phone, email, or username" variant="outlined" />
        <TextField style={{marginTop: '30px'}} id="outlined-basic" label="Password" variant="outlined" type={'password'} />
        <Button color='primary' className={classes.login}>
                  Log in
                </Button>
          <div>
            <span>
              <a href="http://" className={classes.link}> Forgot password?</a>
              <a href="http://" className={classes.link}>Sign up for Twitter</a>

            </span>
          </div>

      </form>
      </div>
        )
    }
}


export default withStyles(styles)(Login)