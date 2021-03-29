import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, rgbToHex, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import home from '../../assests/home.png';
import hash from '../../assests/hash.png';
import notifications from '../../assests/notification.jpeg';
import message from '../../assests/messages.png';
import profile from '../../assests/profile.jpg';
import more from '../../assests/more.png';
import ListItemText from '@material-ui/core/ListItemText';
import twitter from '../../assests/twitter.png';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const style = {
  width: '28px',
};

const avatarStyles = {
  display: 'inherit',
  alignItems: 'center',
  marginLeft: '90px',
  marginBlockStart: 'auto',
  background: 'hsl(240deg 7% 97%)',
  borderRadius: '27px'

}

const avatarContent = {
  marginLeft: '50px'
}

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiListItem-gutters': {
      paddingLeft: '100px',
    },
    '& .MuiTypography-body1': {
      paddingLeft: '22px',
      fontWeight: 'bold',
    },
    '& .MuiButton-containedPrimary': {
      padding: '12px 80px',
      borderRadius: 48,
      background: '#1b88c7',
    },
    '& .MuiListItem-button:hover': {
      backgroundColor: '#c5dce8',
    },
    '& .MuiAvatar-img': {
      objectFit: 'contain'
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  '& .MuiListItem-gutters': {
    paddingLeft: '100px',
  },
}));

const drawer = (
  <div>
    <div>
      <Divider />
      <List>
        {['TweetBird'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <img src={twitter} style={style} /> : null}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <List>
        {['Home', 'Explore'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <img src={home} style={style} />
              ) : (
                <img src={hash} style={style} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {['Notifications', 'Messages'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <img src={notifications} style={style} />
              ) : (
                <img src={message} style={style} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {['Profile', 'More'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <img src={profile} style={style} />
              ) : (
                <img src={more} style={style} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {['Button'].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <Button variant='contained' color='primary'>
                  Tweet
                </Button>
              ) : null}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  </div>
);

const SideBar = (props) => {
  const classes = useStyles();
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <Drawer
        container={container}
        variant='permanent'
        open
        classes={{
          paper: classes.drawerPaper,
          root: classes.root,
        }}
      >
        {drawer}
        <div style={avatarStyles}>
          <span>
          <Avatar alt="Remy Sharp" src={twitter} style={style}/>
 </span>
          <span style={avatarContent}>
          <Typography variant="h6">
  kelvinbeno
</Typography>
          </span>
          <span style={avatarContent}>
            ...
          </span>
      </div>
      </Drawer>

      
    </div>
  );
};

export default SideBar;
