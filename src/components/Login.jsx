import React, {Component} from 'react'
import twitter from '../assests/twitter.png';
import styles from './login.styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

class Login extends Component { 
    
    render(){
    const { classes } = this.props;

        return (
            
        <div className={classes.root}>

        <img src={twitter} alt='twitter' className={'twitter-logo'} />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
        )
    }
}


export default withStyles(styles)(Login)