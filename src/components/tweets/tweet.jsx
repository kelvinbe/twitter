import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import twitter from '../../assests/twitter.png';
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


const icons = [
  <PermMediaIcon />,
  <GifIcon />,
  <PollIcon />,
  <EmojiEmotionsIcon />,
  <CalendarTodayIcon />,
];

const renderIcons = () => {
   return(     
   <List style={{display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'}}>
         {  icons.map((icon, i) => (
                <ListItem key={i}>
                       {icon}
                </ListItem>
         ))}
        </List>
   )

}


const useStyles = makeStyles({
    root:{
            '& .MuiListItem-root': {
                width: '0%',
                paddingTop: '0px',
                paddingBottom: '0px'

            },
            '& .MuiList-padding': {
                paddingTop: '0px',
                paddingBottom: '0px'
            },
            '& .MuiSvgIcon-root': {
                color: '#1b88c7'
            }
    }
})

const Tweet = () => {
    const classes = useStyles();
  return (
      <div className={classes.root}>
    <Card>
      <CardHeader title='Home' />
      <CardContent
        style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}
      >
        <Avatar alt='Remy Sharp' src={twitter} />

        <TextField
          style={{ marginLeft: '10px' }}
          label="What's happening?"
        ></TextField>
      </CardContent>

      <Divider />
      <CardContent style={{paddingLeft: '59px'}}>
          {renderIcons()}
      
      </CardContent>
    </Card>
    </div>
  );
};

export default Tweet;
