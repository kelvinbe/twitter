import React, { Component } from 'react';
import twitter from '../../assests/twitter.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styles from './login.styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import api from '../../api'



class Login extends Component {
  componentDidMount() {
    // api.get('/').then(res => {
    // })
  }

  state = {
    name: '',
    password: '',
    phone: '',
    isLoggedIn: false
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });

  };

  nextPath(path) {
    this.props.history.push(path)
  }

  handleSubmit = (e) => {

    const name = this.state.name 
    const password = this.state.password
    const phone = this.state.phone



    try{
        api.post('api/auth/login', {
          name: name,
          password: password,
          phone: phone,
        })
        .then (res => {
          if(res.status === 200){
            this.setState({isLoggedIn: true})
            if(this.state.isLoggedIn === true){
              this.nextPath('/tweetpage')
      
              }
          }
        })


      }
      catch{
      }


    }


  render() {
    const { classes } = this.props;
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
          <TextField
            id='outlined-basic'
            label='Phone, email, or username'
            variant='outlined'
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <TextField
            style={{ marginTop: '30px' }}
            id='outlined-basic'
            label='Password'
            variant='outlined'
            value={this.state.password}
            type={'password'}
            onChange={this.handlePasswordChange}
          />

          <TextField
            style={{ marginTop: '30px' }}
            id='outlined-basic'
            label='Phone'
            variant='outlined'
            value={this.state.phone}
            type={'phone'}
            onChange={this.handlePhoneChange}
          />
          <Button
            color='primary'
            className={classes.login}
            onClick={this.handleSubmit}
          >
            Log in
          </Button>
          <div>
            <span>
              <a href='http://' className={classes.link}>
                {' '}
                Forgot password?
              </a>
              <a href='http://' className={classes.link}>
                Sign up for Twitter
              </a>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
