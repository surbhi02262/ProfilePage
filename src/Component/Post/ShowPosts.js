import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPost} from '../../Store/Post/actions';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import api from '../../Api/Api'
import {CreateNewFolderOutlined as EditIcon,
    DeleteForeverOutlined as DeleteIcon
 } from '@material-ui/icons'
import PopperWrapper from '../PopperWrapper/PopperWrapper'
import { height } from '@material-ui/system';
const styles = theme => ({
    card: {
      margin: '20px 0' 
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
     '& img':{
         width: '100%',
         height: '100%'
     }
    },
  });
  
class ShowPosts extends Component {
    
    componentDidMount(){
        setInterval (() =>{
            this.props.getPost()
        },5000)

    }
    editPost = () => {
        console.log('edit')
    }
    deletePost = () => {
        console.log('delete')
    }
    render() {
        const{classes,posts} = this.props;
        const postMenu = [{
            icon: <DeleteIcon />,
            title: "Delete Post",
            onClick: this.deletePost
        }, {
            icon: <EditIcon />,
            title: "Edit Post",
            onClick: this.editPost
        }]
        console.log('posts',posts);
        return (
            posts.map(item => <div className="post-wrapper">
            <Card className={classes.card}>
                <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                <img src={api.HOST+item.userId.Image} alt="user-img" />
                            </Avatar>
                        }
                        action={
                            <PopperWrapper menu={postMenu} >
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            </PopperWrapper>
                       
                         }
                        title={`${item.userId.firstName} ${item.userId.lastName}`.toLocaleUpperCase()}
                        
                        subheader={item.createdDate && moment(new Date(item.createdDate), 'YYYYMMDD').fromNow()}
                    />
                    {item.image &&  
                        <div className="post-image-wrapper">
                            <img src={api.HOST+item.image} alt="test" title="Paella dish"/>
                        </div>}
                    {item.video &&  <div className="post-image-wrapper"><iframe 
                        width="90%" 
                        height="400" 
                        src={`https://www.youtube.com/embed/${item.video}`}
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe></div>}
                    <CardContent>
                        <Typography component="p">{item.message}</Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
            )
        );
    }
}
const mapStateToProps = (state) =>({
    posts: state.Post.posts
})

const mapDispatchToProps = {
    getPost
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ShowPosts));