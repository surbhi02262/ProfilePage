import React, { Component } from 'react';
import {Grid} from '@material-ui/core';

class UserInfo extends Component {
    render() {
        const{user} = this.props;
        return (
            <Grid item xs={12} className="user-info-conatiner">
                <div className="title">{user.firstName} {user.lastName}</div>
                <div className="info">{user.gender} | {new Date(user.dob).toDateString()} |{user.email}</div>
            </Grid>
        );
    }
}

export default UserInfo;