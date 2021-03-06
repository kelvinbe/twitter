import { Divider } from '@material-ui/core';
import React from 'react';
import SideBar from '../sidebar/SideBar';
import './tweetPage.styles.js';
import CreateTweet from '../tweets/createTweet';
import Tweet from '../tweets/tweet';
import { withStyles } from '@material-ui/core/styles';
import styles from './tweetPage.styles';
import firebase from "../../firebase";
import { useState, useEffect } from 'react';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const TweetPage = () => {
  const [tweets, setTweet] = useState([])
  const [newTweets, setNewTweets] = useState('')
  const [initialTweets, setInitialTweets] = useState({id: '', tweet: ''})
  const [error, setError] = useState('')

  const ref = firebase.firestore().collection("tweet")

  const HandleNewTweets = (e) => {
    e.preventDefault()
    const value = e.target.value
    setNewTweets(value)
    }


    const handleClose = () => {
      setError('')
    }

  function getTweets() {
    ref.onSnapshot((querySnapShot) => {
      const items = []
      querySnapShot.forEach((doc) => {
        items.push(doc.data())
      })
      setTweet(items)
    })
  }

  useEffect(() => {
    getTweets()
  }, [])

  const handleTweetsList = () => {
    const incomingTweets = tweets.map((tweet) => <Tweet tweets={tweet.tweet} key={tweet.id} />);
    return incomingTweets;
  }

  const PostTweets = () => {
  const response = setInitialTweets({id: tweets.length++, tweet: newTweets})

  console.log('newTweet', newTweets)
  if(newTweets === ''){
  return setError('Nothing to tweet')

  }
    ref.doc().set(initialTweets).catch((err) => {
      console.log(err)
    })  
  }

    return (
      <div>
        
        <div>
          <SideBar />
        </div>
        <div>
          <CreateTweet
            tweetData={newTweets}
            onChange={HandleNewTweets}
            onClick={PostTweets}
          />
          
        </div>
        <Divider />
        <div style={{width: 206, paddingLeft: 499}}>
        {error && <Alert onClick={handleClose} severity="error">{error}</Alert>}
        </div>
        <div>{handleTweetsList()}</div>
      </div>
    );
}




export default withStyles(styles)(TweetPage);
