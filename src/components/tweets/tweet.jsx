import React, {Component} from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import profile from '../../assests/profilepic.jpg';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SendIcon from '@material-ui/icons/Send';
import styles from './tweet.styles';
import { withStyles } from '@material-ui/core/styles';


const style = {
  width: '26px',
  color: 'lightgrey',
};

const icons = [
  <ReplyIcon />,
  <SendIcon />,
  <FavoriteBorderIcon />,
  <ShareIcon />,
];

const renderIcons = () => {
  return (
    <List
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      {icons.map((icon, i) => (
        <ListItem key={i}>{icon}</ListItem>
      ))}
    </List>
  );
};



class Tweet extends Component {

render(){
const {classes, tweets} = this.props
console.log('tweetsInTweet', tweets)
console.log('classesss', classes)

  
  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title='name'></CardHeader>
        <CardContent
          style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}
        >
          <Avatar alt='Remy Sharp' src={profile} />

          <p style={{ marginLeft: '10px' }}>
            {tweets}
          </p>
        </CardContent>

        <Divider />
        <CardContent>{renderIcons()}</CardContent>
      </Card>
    </div>
  );
  }
};

export default withStyles(styles)(Tweet);
