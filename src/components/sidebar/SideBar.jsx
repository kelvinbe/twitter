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
import profilee from '../../assests/profilepic.jpg';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import TwitterChart from '../charts/apexChart';
import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import cx from 'classnames';
import GoodJob from '../videos/gjob.mp4'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { DialogTitle } from '@material-ui/core';
import shakes from '../../assests/shakes.jpg'
import mwai from '../../assests/Mwai.jpg'
import {dialogText} from './dialogText';



const style = {
  width: '28px',
};

const avatarStyles = {
  display: 'inherit',
  alignItems: 'center',
  marginLeft: '90px',
  marginBlockStart: 'auto',
  background: 'hsl(240deg 7% 97%)',
  borderRadius: '27px',
};

const avatarContent = {
  marginLeft: '50px',
};

const drawerWidth = 343;



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
      borderRadius: 58
    },
    '& .MuiAvatar-img': {
      objectFit: 'contain',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '34px',
      paddingBottom: '10px'
    },
    '& .MuiTableRow-root': {
      height: 73
    },
    '& .MuiTable-root': {
      backgroundColor: 'whitesmoke'
    },
    '& .MuiTableCell-root:hover': {
      backgroundColor: '#dcdcdc',
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.down('md')]: {
      width: 100
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

  table: {
    minWidth: 200,
  },
  drawerHidden: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  tweetsPerDay: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#0989f3',
    fontSize: 20
  },
  lookingGoodVideo: {
    objectFit: 'scaledown',
    position: 'relative',
    width: '100%'
  },
  img: {
    width: '135px;',
  }
}));








const twitterSearch = [{ title: 'Try searching for people, topics, or keywords' }];





const SideBar = (props) => {
  const classes = useStyles();
  const [showChart, setShowChart] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    window?.addEventListener("scroll", () => {
      if (window?.pageYOffset > 300) {
      }
    });
  }, []);




  const { logout } = useAuth()


  const openDialog = () => {
    console.log('opennnn', open)
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const renderDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='form-dialog-title'
        className={classes.root}
      >
        <DialogTitle>
          <div>
            <img src={shakes} alt='twitter' className={classes.img} />
          </div>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <h3 style={{ color: 'black' }}>
              {dialogText.ShakesSpear}
            </h3>
          </DialogContentText>

        </DialogContent>
      </Dialog>
    )
  }




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
            <ListItem button key={text} onClick={() => ScrollToTop(text)}>
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
                    Play Time
                  </Button>
                ) : null}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );


  const drawer_two = (
    <div>
      <Autocomplete
        freeSolo
        options={twitterSearch.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search twitter'
            margin='normal'
            variant='outlined'
          />
        )}
      />
      <div className={classes.tweetsPerDay}>
        <div>
          Tweets Per Day
        </div>
        <div><SettingsIcon onClick={() => setShowChart(!showChart)} /></div>
        <div></div>
      </div>

      <TableContainer component={Paper}>
        {showChart ? <TwitterChart /> :
          <Table className={classes.table} aria-label="simple table">

            <TableBody>
              <TableRow>
                <TableCell onClick={openDialog}>William Shakespear</TableCell>
              </TableRow>
              <TableRow>
                <TableCell onClick={openDialog}>Raila Odinga</TableCell>
              </TableRow>
              <TableRow>
                <TableCell onClick={openDialog}>Fred ngatia</TableCell>
              </TableRow>
              <TableRow>
                <TableCell onClick={openDialog}>Yaya Toure</TableCell>
              </TableRow>
              <TableRow>
                <TableCell onClick={openDialog}>Show more</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        }

      </TableContainer>
      {showChart &&
        <video autoPlay loop className={classes.lookingGoodVideo} muted>
          <source src={GoodJob} type="video/mp4" />
        </video>
      }
      <Button onClick={logout}>
        Log Out
      </Button>
    </div>
  );

  const ScrollToTop = (text) => {

    console.log('teaxtttt', text)
    if (text === 'Home') {
      window.scrollTo(0, 0)
    }
    if (text === 'Explore') {
      console.log('exloreeeBefore', props.explore)
      props.explore(true)
    }
  };



  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <div>
      {open && renderDialog()}
      </div>
      <Drawer
        container={container}
        variant='permanent'
        open
        anchor='left'
        classes={{
          paper: cx(classes.drawerPaper, classes.drawerHidden),
          root: classes.root,
        }}
      >
        {drawer}
        <div style={avatarStyles}>
          <span>
            <Avatar alt='Remy Sharp' src={profilee} style={style} />
          </span>
          <span style={avatarContent}>
            <Typography variant='h6'>kelvinbeno</Typography>
          </span>
          <span style={avatarContent}>...</span>
        </div>
      </Drawer>
      <div>
        <Drawer
          key='Drawer2'
          container={container}
          variant='permanent'
          open
          anchor='right'
          classes={{
            paper: cx(classes.drawerPaper, classes.drawerHidden),
            root: classes.root,
          }}
        >
          {drawer_two}
        </Drawer>
      </div>
    </div>
  );


};





export default SideBar;
