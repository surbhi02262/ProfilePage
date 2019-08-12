import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSuggestedFriends} from '../../Store/SuggestedFriends/actions';
import ShowPicture from '../ShowPicture/ShowPicture';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import api from '../../Api/Api';

class ShowFriends extends Component {
    componentDidMount(){
        this.props.getSuggestedFriends(6)
    }
    
    render() {
        const{friendList,title} = this.props;        
        let displayData = friendList;      
        return (
           <Grid container className="friends-container">
            <Grid item xs={12} className="title">{title}</Grid>
            {displayData.map(item => <Grid item xs={4}>
                    <Link to={`/friends/${item._id}`}>
                        <div className="info-wrapper">
                            <ShowPicture className="image-wrapper" image={api.HOST+item.Image}></ShowPicture>
                           
                            <div className="image-title">{item.firstName}</div>
                        </div>
                    </Link>    
                </Grid>
            )}
            {/* {displayData.map(item => <Grid item xs={2}>
                        <Link to={`/friends/${item._id}`}>
                            <div className="info-wrapper">
                                <div className="frnd-image-container">
                                    <ShowPicture image={item.Image}></ShowPicture>
                                </div>
                                <div>{item.firstName}</div>
                            </div>
                        </Link>
                </Grid>
            )} */}
            </Grid>
        );
    }
}
const mapStatetoProps = (state) =>({
    suggestedFrnds : state.SuggestedFriends.users
})
const mapDispatchToProps = {
    getSuggestedFriends,
}
export default connect(mapStatetoProps,mapDispatchToProps)(ShowFriends);