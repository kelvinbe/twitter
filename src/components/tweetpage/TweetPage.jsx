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
import Explore from '../explore/Explore'


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const TweetPage = () => {
  const [tweets, setTweet] = useState([])
  const [newTweets, setNewTweets] = useState('')
  const [initialTweets, setInitialTweets] = useState({id: '', tweet: ''})
  const [error, setError] = useState('')
  const [explore, setExplore] = useState(false)


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
      for(let i = 0; i < items.length; i++){
        const cleanTweets = []
        console.log('items', items[i])
        if(Object.keys(items[i]).length === 0 || items[i].tweet === '' || items[i] === {}){
          console.log('emptyyyyy', items[i])
          console.log('indexOfEmpty', i)
          items.splice(i, 1)
          console.log('itemsss', items)
          cleanTweets.push(items)
          console.log('newTweets', cleanTweets)
          setTweet(cleanTweets[0])
        }

      }


    })
  }


  useEffect(() => {
    getTweets()
  }, [])

  const handleExplore = () => {

  }



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

  console.log('newTweetsss', newTweets)
    ref.doc().set(initialTweets).catch((err) => {
      console.log(err)
    })  
  }

  console.log('exploreeeEEEEE', explore)

    return (
      <div>
        
        <div>
          <SideBar explore={explore => setExplore(explore)} />
        </div>
        <div>
         {explore && <Explore/>}

        </div>
        <div>
        {!explore && <CreateTweet
            tweetData={newTweets}
            onChange={HandleNewTweets}
            onClick={PostTweets}
          />}
          
        </div>
        <Divider />
        <div style={{width: 206, paddingLeft: 499}}>
        {error && <Alert onClick={handleClose} severity="error">{error}</Alert>}
        </div>
        <div>{!explore && handleTweetsList()}</div>
      </div>
    );
}




export default withStyles(styles)(TweetPage);
