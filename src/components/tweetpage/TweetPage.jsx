import { makeStyles } from '@material-ui/core';
import React, {Component} from 'react'
import SideBar from '../sidebar/SideBar'
// import { makeStyles } from '@material-ui/core/styles';
import './tweetPage.css'
import Tweet from '../tweets/tweet'

class TweetPage extends Component {

    render(){

        return(
            <div>
            <div className={'MuiBackdrop-root'}>
                <SideBar />

            </div>
            <div style={{  width: '100%', marginLeft: '33%'}}>
                <Tweet />
            </div>
            </div>

            
        )
    }
    
}


export default TweetPage;
