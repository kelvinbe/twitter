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
import styles from './explore.styles';
import { withStyles } from '@material-ui/core/styles';


const style = {
  width: '26px',
  color: 'lightgrey',
};

const icons = [
  {title: 'Suadi Arabia', text: 'blaaa'},
  {title: 'Ethiopia', text: 'blaaa'},
  {title: 'Kenya', text: 'blaaa'},
  {title: 'Yakuza', text: 'blaa'},
  {title: 'Will Smith', text: 'baaa'},

];



const renderIcons = () => {
  return (
    <div>
      {icons.map((icon, i) => (
        <Card key={i}>
          <CardHeader title={icon.title}></CardHeader>
        <CardContent style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
          
          {icon.text}
          </CardContent>
          <Divider />
          </Card>
      ))}
    </div>
  );
};
console.log('icons', renderIcons())




class Explore extends Component {

render(){
const {classes} = this.props

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title='name'></CardHeader>
        <CardContent style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
        <iframe src="https://giphy.com/embed/gZEBpuOkPuydi" width="480" height="325" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animation-animated-free-gZEBpuOkPuydi">Shall We Explore</a></p>
        </CardContent>

        <Divider />
        <CardContent className={classes.title}>Trends For You</CardContent>
        <Divider />


      </Card>
      {renderIcons()}
      
    </div>
    
  );
  }
};

export default withStyles(styles)(Explore);
