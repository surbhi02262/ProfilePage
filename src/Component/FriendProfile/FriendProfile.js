import React,{Component} from 'react';
import {Grid} from '@material-ui/core';
import CardWrapper from '../CardWrapper/CardWrapper';
import {connect} from 'react-redux';
import ShowPicture from '../ShowPicture/ShowPicture';
import UserInfo from '../UserInfo/UserInfo';
import ShowFriends from '../ShowFriends/ShowFriends';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import {showfriendInfo,getStatus,addFriend} from '../../Store/FriendProfile/actions';
import {withRouter} from 'react-router';

class FriendProfile extends Component{ 
    state={
        fId: "",
    }
    componentDidMount(){
        let friendId= this.props.match.params.id;
        this.props.showfriendInfo(friendId);
        this.props.getStatus(this.props.userId,friendId);
        this.setState({fId:friendId})
    }
    handleStatus = (status) =>{
        console.log('stst',status)
        if(status === 'Add Friend'){
            console.log('inside add friend , add user in friend table ');
            let friendId= this.props.match.params.id;
            this.props.addFriend(this.props.userId,friendId);
        }else{
            console.log('outside add friend')
        }
    }
    render(){
        const{fId} =this.state
        const{FriendInfo,statusInfo} = this.props;
        console.log('inside frnd prodilr')
        return (
        <Grid container item xs={12}>
            <Grid item xs={6}>
                <CardWrapper>
                    <Grid container className="profile-wrapper">
                        <Grid container item xs={4} className="left-bar">
                            <Grid item xs={12} className="image-container">
                                <ShowPicture image={FriendInfo.Image}/>
                            </Grid>
                            <Grid item xs={12} className="userInfo-container">
                                    <div className="username">{FriendInfo.firstName}</div>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={7} className="right-bar">
                            <Grid item xs={12} className="info-spacing">                              
                                <UserInfo userInfo={FriendInfo}></UserInfo>
                                <ButtonWrapper onClick={() => this.handleStatus(statusInfo.status)}>{statusInfo.status}</ButtonWrapper>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardWrapper>  
            </Grid> 
            <Grid container item xs={1}></Grid> 
            <Grid container item xs={5}>
           
            </Grid> 
        </Grid>
        )
    }
}
const mapDispatchToProps = {
    showfriendInfo,
    getStatus,
    addFriend,
}
const mapStateToprops = (state) =>({
    FriendInfo:state.FriendProfile.friendInfo,
    userId : state.Login.user._id,
    statusInfo: state.FriendProfile.statusInfo,
    isSucc:state.FriendProfile.isSuccess

})
export default withRouter(connect(mapStateToprops,mapDispatchToProps)(FriendProfile));
