import { Divider, makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import SideBar from '../sidebar/SideBar';
// import { makeStyles } from '@material-ui/core/styles';
import './tweetPage.styles.js';
import CreateTweet from '../tweets/createTweet';
import Tweet from '../tweets/tweet';
import { withStyles } from '@material-ui/core/styles';
import styles from './tweetPage.styles';
import axios from 'axios';
import api from '../../api';

class TweetPage extends Component {
  state = {
    newTweet: '',
    tweets: [],
  };

  componentDidMount() {
    api.get('tweets').then((res) => {
      this.setState({ tweets: res.data });
    });
  }

  handleNewTweets(event) {
    this.setState({ newTweet: event.target.value });
  }

  handleTweetsList() {
    const tweets = this.state.tweets.map((tweet) => {
      return <Tweet tweets={tweet.tweet} key={tweet.id} />;
    });
    return tweets;
  }

  async postTweets() {
    const tweets = [...this.state.tweets]
    const tweet = this.state.newTweet;
    const response = await api.post('tweets', {
      tweet: tweet,
    });
    tweets.unshift(response.data)
    this.setState({tweets})
    
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <SideBar />
        </div>
        <div>
          <CreateTweet
            tweetData={this.state.newTweet}
            onChange={this.handleNewTweets.bind(this)}
            onClick={this.postTweets.bind(this)}
          />
        </div>
        <Divider />
        <div>{this.handleTweetsList()}</div>
      </div>
    );
  }
}

export default withStyles(styles)(TweetPage);
