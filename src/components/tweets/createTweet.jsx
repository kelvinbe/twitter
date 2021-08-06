import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
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
import profile from '../../assests/profilepic.jpg';


const icons = [
  <PermMediaIcon />,
  <GifIcon />,
  <PollIcon />,
  <EmojiEmotionsIcon />,
  <CalendarTodayIcon />,
];

const renderIcons = () => {
  return (
    <List
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      {icons.map((icon, i) => (
        <ListItem key={i}>{icon}</ListItem>
      ))}
    </List>
  );
};

const renderTweetButton = (onClick) => {
  return (
    <Button variant='contained' color='primary' onClick={onClick}>
      Tweet
    </Button>
  );
};


const useStyles = makeStyles((theme) => ({
  root: {
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
      color: '#1b88c7',
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
    '& .MuiCard-root': {
    maxWidth: '50%',
    maxHeight: 232,
    paddingLeft: '347px',
    [theme.breakpoints.down('sm')]: {
       paddingLeft: 0,
       maxWidth: '100%',

    },

    },
    
  },
  cardIconContent: {
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '59px',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
 }
  }
}));

const CreateTweet = (props) => {
  const {tweetData, onChange, onClick} = props
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title='Home'>
          <CardMedia image={TopTweet} title='Contemplative Reptile' />
        </CardHeader>
        <CardContent
          style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}
        >
          <Avatar alt='Remy Sharp' src={profile} />

          <TextField
            style={{ marginLeft: '10px' }}
            label="What's happening?"
            InputProps={{ disableUnderline: true }}
            onChange={onChange}
            value={tweetData}
            fullWidth
          ></TextField>
        </CardContent>

        <Divider />
        <CardContent className={classes.cardIconContent}>
          {renderIcons()}
          {renderTweetButton(onClick)}
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateTweet;
