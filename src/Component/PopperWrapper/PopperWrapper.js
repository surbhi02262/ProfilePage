import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
class PopperWrapper extends Component {
    state = {
        anchorEl: null,
        open: false,
      };

      handleClick = event => {
        const { currentTarget } = event;
        this.setState(state => ({
          anchorEl: currentTarget,
          open: !state.open,
        }));
      };


      handleClickAway = () => {
        this.setState({
            open: false,
          });
      }
    render() {
        const{children, classname, menu} = this.props;
        const { anchorEl, open } = this.state;
        const id = open ? 'simple-popper' : null;
        return (<>
            <span className={classname} aria-describedby={id} onClick={this.handleClick}>
               {children}
            </span>
           
                <Popover id={id} open={open} anchorEl={anchorEl} 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                    {/* {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}> */}
                         <ClickAwayListener onClickAway={this.handleClickAway}>
                        <Paper>
                        
                        <List component="nav" aria-label="main mailbox folders">
                           {menu.map(item => <ListItem button onClick={item.onClick}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>)}
                            
                        </List> 

                        </Paper>
                        </ClickAwayListener>
                        {/* </Fade>
                    )} */}
                </Popover>
                
                </>
        );
    }
}

export default PopperWrapper;