import React, { Component } from 'react';
import twitter from '../assests/twitter.png';
import twit from '../assests/twit.jpg';
import down from '../assests/download.png';

import '../styles/home.css';
import Button from '@material-ui/core/Button';
import HomeFooter from './HomeFooter';
import SignUp from './SignUp';
import styles from './home.styles';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Login from './Login';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'


const api = axios.create({
  baseURL: `http://127.0.0.1:8000/`,
});


class Home extends Component {
  state = {
    open: false,
    isLoading: false,
    name: '',
    phone: '',
    month: '',
    year: '',
    day: '',
    password: '',
    isSignedUp: false
  };

  handleClickOpen() {
    this.setState({ open: true });
  }
  nextPath(path) {
    this.props.history.push(path)
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleName = (e) => {
    this.setState({name: e.target.value})
    console.log(this.state.name)
  }

  handlePhone = (e) => {
    this.setState({phone: e.target.value})
  }

  handleMonth = (e) =>{
    this.setState({month: e.target.value})
  }

  handleDay(e) {
    this.setState({day: e.target.value})
  }

  handlePassword =(e) => {
    this.setState({password: e.target.value})
  }

  handleYear(e) {
    this.setState({year: e.target.value})
  }

  nextPath(path) {
    this.props.history.push(path)
  }

handleSignUp = (e) =>{
    const name = this.state.name
    const password = this.state.password
    const phone = this.state.phone

  api.post('api/auth/register', {
      name, password, phone
  })
  .then(res => {
    if(res.status === 201){
      alert('You have been signed up')
      this.setState({isSignedUp: true})
      if(this.state.isSignedUp){
        this.nextPath('/login')
      }
    }


  })

}

  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'system-ui',
      fontSize: '14px',
      color: 'grey',
      paddingTop: '10px',
    };
    const { classes } = this.props;



    return (
      <div>
        <div className={classes.pageDivision}>
          <div className={classes.twitLogo}>
            <img src={down} className='twit-logo' />
          </div>
          <div className={classes.secondHalf}>
            <div style={{ paddingRight: '284px' }}>
              <img src={twitter} alt='twitter' className='twitter-logo' />
            </div>
            <div>
              <h1 style={{ fontSize: '50px' }}>Happening now</h1>
            </div>
            <div>
              <h2 style={{ fontSize: '40px' }}>Join Twitter today.</h2>
            </div>
            <div className={classes.buttonParent}>
           {this.state.isLoading && <div>
                <CircularProgress />
              </div>}
              <div>
                <Button
                  variant='contained'
                  className={classes.root}
                  onClick={this.handleClickOpen.bind(this)}
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button color='secondary' className={classes.login} onClick={() => this.nextPath('/login')}>
                  Log in
                </Button>

  
              </div>
              {this.state.open && (
                <div>
                  <SignUp handleSignUp={this.handleSignUp}   handleName={this.handleName} handlePassword={this.handlePassword}  handlePhone = {this.handlePhone} onClose={this.handleClose} open={this.state.open}/>
                </div>
              )}
           

            </div>
          </div>
        </div>
        <footer>
          <HomeFooter />
          <div style={style}>
            <p>© 2021 Twitter, Inc.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
