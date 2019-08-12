import React, { Component } from 'react';
import {connect} from 'react-redux'
import './spinner.css'
class Spinner extends Component {
    render() {
        return (
            this.props.show && <div className="spinner-container"><div className="loader"></div></div>
        );
    }
}
const mapStateToProps = (state) => ({
    show: state.Header.loading
})
export default connect(mapStateToProps,null)(Spinner);