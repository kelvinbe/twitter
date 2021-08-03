import React, { Component } from 'react';
import twitter from '../assests/twitter.png';
import twit from '../assests/twit.jpg';
import down from '../assests/download.png';
import '../styles/home.css';
import Button from '@material-ui/core/Button';
import HomeFooter from './HomeFooter';
import SignUp from './auth/SignUp';
import styles from './home.styles';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Login from './auth/Login';
import CircularProgress from '@material-ui/core/CircularProgress';
import api from '../api';
import moment from 'moment';


class Home extends Component {
  state = {
    open: false,
    isLoading: false,
    name: '',
    phone: '',
    password: '',
    month: '',
    year: '',
    day: '',
    isSignedUp: false,
  };

  handleClickOpen() {
    this.setState({ open: true });
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };


  handleMonthChange = (month) => {
    this.setState({month})
  }

  handleYearChange = (year) => {
    this.setState({year})

  }

  handleDayChange = (day) => {
    this.setState({day})
  }


  nextPath(path) {
    this.props.history.push(path);
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
              {this.state.isLoading && (
                <div>
                  <CircularProgress />
                </div>
              )}
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
                <Button
                  color='secondary'
                  className={classes.login}
                  onClick={() => this.nextPath('/login')}
                >
                  Log in
                </Button>
              </div>
              {this.state.open && (
                <div>
                  <SignUp
                    handleYearChange = {this.handleYearChange}
                    handleDayChange = {this.handleDayChange}
                    handleMonthChange ={this.handleMonthChange}
                    handleName={this.handleName}
                    handlePassword={this.handlePassword}
                    handlePhone={this.handlePhone}
                    phone={this.state.phone}
                    password={this.state.password}
                    onClose={this.handleClose}
                    open={this.state.open}
                  />
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
