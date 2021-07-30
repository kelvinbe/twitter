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


const TweetPage = () => {
  const [tweets, setTweet] = useState([])
  const ref = firebase.firestore().collection("tweet")
  console.log('reffffff', ref)



  function getTweets() {
    ref.onSnapshot((querySnapShot) => {
      const items = []
      console.log('itemssss', items)
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
    console.log('TweetsInHandleTweet', tweets)
    return incomingTweets;
  }




  const postTweets = () => {
    const tweets = [...this.state.tweets]
    const tweet = this.state.newTweet;
    this.setState({tweets})
    
  }

 const handleNewTweets = (e) => {
    setTweet({ newTweet: e.target.value });
  }

    return (
      <div>
        <div>
          <SideBar />
        </div>
        <div>
          <CreateTweet
            tweetData={tweets.tweet}
            onChange={handleNewTweets}
            onClick={postTweets}
          />
        </div>
        <Divider />
        <div>{handleTweetsList()}</div>
      </div>
    );
}




export default withStyles(styles)(TweetPage);
