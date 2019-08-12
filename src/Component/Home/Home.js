import React,{Component} from 'react';
import {Grid} from '@material-ui/core';
import CardWrapper from '../CardWrapper/CardWrapper';
import {connect} from 'react-redux';
import ShowPicture from '../ShowPicture/ShowPicture';
import UserInfo from '../UserInfo/UserInfo';
import ShowFriends from '../ShowFriends/ShowFriends';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import {getSuggestedFriends} from '../../Store/SuggestedFriends/actions';
import InputFieldWrapper from '../InputFieldWrapper/InputFieldWrapper';
import {getFriends} from '../../Store/FriendProfile/actions'
import {setImage, upload} from '../../Store/UserInfo/actions';
import PostField from '../Post/PostField';
import ShowPosts from '../Post/ShowPosts';
import api from '../../Api/Api'
import {Link} from 'react-router-dom';

class Home extends Component{ 
    state={
        search:"",
        edit:false,
    }
  
    handleInputChange = (name,value) =>{
        this.setState({search:value})
        console.log('search',this.state.search)
    }
    handleEdit = () =>{
        this.setState({edit:true})
    }
    componentDidMount(){
        this.props.getFriends();
    }
    render(){
        const{user,requestReceived,friendList} = this.props;
     //   const{open,imageData,imgValue,search,edit} = this.state;
        //console.log('userUploadImageInfo',userUploadImageInfo,isSuccess);
        return (
            <Grid container className="home-container" justify="center"
            alignItems="flex-start">
                <Grid container item xs={3} justify="center"
  alignItems="flex-start">
                    <Grid item xs={12}>
                        <ShowPicture className="image-container profile-image" 
                        user={user}
                        image={api.HOST+user.Image}/>
                        
                    </Grid>
                    <Grid item xs={12} className="menu-item">
                        <Link to='/gallery' >Gallery</Link>
                    </Grid>
                    <Grid item xs={12} className="menu-item">
                        <Link to='/gallery' >Gallery</Link>
                    </Grid>
                    <Grid item xs={12} className="menu-item">
                        <Link to='/gallery' >Gallery</Link>
                    </Grid>
                    <Grid item xs={12} className="menu-item">
                        <Link to='/gallery' >Gallery</Link>
                    </Grid>
                </Grid>
               
                <Grid container item xs={9} justify="center"
  alignItems="flex-start" >
                    <Grid container item xs={8} className="user-profile">
                        <Grid item xs={12}  >
                            <UserInfo user={user}/>
                            <PostField/>
                            <ShowPosts/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4} justify="center"
  alignItems="flex-start">
                        {friendList.length > 0 && <Grid container item xs={12}>
                            <ShowFriends friendList={friendList} title="Friends"/>
                        </Grid> }
                        {requestReceived.length > 0 && <Grid container item xs={12}>
                            <ShowFriends friendList={requestReceived} title="Friend Requests"/>
                        </Grid>}
                        <Grid container item xs={12}>
                            <ShowFriends friendList={[]} title="Suggested Friends"/>
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
        )
    }
}
const mapStateToProps= (state) => ({
    user:state.Login.user,
    requestReceived: state.FriendProfile.requestReceived,
    friendList: state.FriendProfile.friendList,
  
})
const mapDispatchToProps ={
    getSuggestedFriends,
    setImage,
    getFriends,
    upload,
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)


/**
 * 
 * <DialogWrapper open={open} title="Upload Image" handleClose={this.closePopUp} btnAction="Save"  
                handleSave={() => this.handleSave(userInfo)}>
               <input type="file" onChange={(e) => this.handleUploadImage(e)}/>
               <div className="upload-image-container">
                    <img src={imageData} alt=""/>
                </div>
            </DialogWrapper>
 * 
 */


// <CardWrapper>
//                         <Grid container className="profile-wrapper">
//                             <Grid item md={4} className="left-bar">
//                                 <Grid item xs={12} className="image-container">
//                                    {/* {userUploadImageInfo.Image ? <ShowPicture image={userUploadImageInfo.Image}/>:  <ShowPicture image={userInfo.Image}/>} */}
//                                  <ShowPicture image={api.HOST+userInfo.Image}/>

//                                     <div className="black-strip">
//                                         <ButtonWrapper onClick={() => this.handleUpload()}>Upload Image</ButtonWrapper>
//                                     </div>
//                                 </Grid>
//                                 <Grid item xs={12} className="userInfo-container">
//                                     <div className="username">{userInfo.firstName}</div>
//                                 </Grid>
//                             </Grid>
//                             <Grid item md={1} ></Grid>
//                             {/* {edit ? : } */}
//                             <Grid item md={6} className="right-bar">
//                                 <Grid item xs={12} className="info-spacing">                              
//                                     <UserInfo userInfo={userInfo}></UserInfo>
//                                 </Grid>
//                             </Grid>
//                             <Grid item md={1} className="right-bar">
//                                 <Grid item xs={12} className="info-spacing">                              
//                                     <button onClick={() => this.handleEdit()}className="link-edit">Edit</button>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                     </CardWrapper>



/**
 * 
 * <Grid container className="profile-container">
                    <Grid container item className="friends-header">
                        <Grid item md={8} style={{padding:'30px 10px'}}>
                            Friends
                        </Grid>
                        <Grid item md={4}>
                            <ButtonWrapper onClick={() =>this.props.getSuggestedFriends('all')}>Show All</ButtonWrapper>
                        </Grid>
                    </Grid>
                    <Grid item md={12} className="right-bar">
                        <ShowFriends userId={userInfo._id}/>
                    </Grid>
                </Grid>
                <Grid  md={12} item spacing={7} style={{padding:'10px 0px'}}>
                </Grid>
                <Grid container className="profile-container">
                    <Grid container item className="friends-header">
                        <Grid item md={8} style={{padding:'30px 10px'}}>
                            Suggested Friends
                        </Grid>
                        <Grid item md={4}>
                            <ButtonWrapper onClick={() =>this.props.getSuggestedFriends('all')}>Show All</ButtonWrapper>
                        </Grid>
                    </Grid>
                    <Grid item md={12} className="right-bar">
                        <InputFieldWrapper type="text" value={this.state.search} label="Search" name="search" onChange={this.handleInputChange}></InputFieldWrapper>
                    </Grid>
                    <Grid item md={12} className="right-bar">
                        <ShowFriends searchData={search} userId={userInfo._id}/>
                    </Grid>
                </Grid>
                
 * 
 */