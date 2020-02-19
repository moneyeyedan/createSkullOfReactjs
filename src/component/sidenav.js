import React from 'react';
import {withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import { Button } from '@material-ui/core';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

 function Sidenav(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });

//   const toggleDrawer = (side, open) => event => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [side]: open });
//   };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
    //   onClick={toggleDrawer(side, false)}
    //   onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem button onClick={()=>props.history.push('/profile')}>
            <ListItemText primary="profile" />
          </ListItem>
          <ListItem button onClick={()=>props.history.push('/login')}>
            <ListItemText primary="login" />
          </ListItem><ListItem button onClick={()=>props.history.push('/sign_up')}>
            <ListItemText primary="signUp" />
          </ListItem>
      </List>
    </div>
  );


  return (
    <div>
      <Drawer open={state.left} >
        {sideList('left')}
      </Drawer>
    </div>
  );
}


export default withRouter(Sidenav)















