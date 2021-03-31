import React from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import profile from '../../assests/profilepic.jpg';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TopTweet from '../../assests/topTweets.png';
import CardMedia from '@material-ui/core/CardMedia';
import retweet from '../../assests/retweet.png';
import SendIcon from '@material-ui/icons/Send';

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

const useStyles = makeStyles({
  root: {
    paddingTop: '10px',
    '& .MuiListItem-root': {
      width: '0%',
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    '& .MuiList-padding': {
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    '& .MuiSvgIcon-root': {
      color: 'grey',
    },
    '& .MuiButton-containedPrimary': {
      padding: '10px 12px',
      borderRadius: 48,
      background: '#1b88c7',
      height: 47,
    },
    '& .MuiAvatar-img': {
      objectFit: 'contain',
    },
  },
});

const Tweet = (props) => {
    const {tweets} = props
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title='name'></CardHeader>
        <CardContent
          style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}
        >
          <Avatar alt='Remy Sharp' src={profile} />

          <Typography style={{ marginLeft: '10px' }}>
            {tweets}
          </Typography>
        </CardContent>

        <Divider />
        <CardContent>{renderIcons()}</CardContent>
      </Card>
    </div>
  );
};

export default Tweet;
