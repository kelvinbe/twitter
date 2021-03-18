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


class Home extends Component {
  state = {
    open: false,
    isLoading: false
  };

  handleClickOpen() {
    this.setState({isLoading: true})
    this.setState({ open: true });
    console.log('We are in here');
    this.setState({isLoading: false})
  }

  handleClose = () => {
    this.setState({ open: false });
  };

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

  const  navigateToLogin = () => {
      return <Login />
    }

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
                <Button color='secondary' className={classes.login} onClick={this.navigateToLogin}>
                  Log in
                </Button>

  
              </div>
              {this.state.open && (
                <div>
                  <SignUp onClose={this.handleClose} open={this.state.open}/>
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
