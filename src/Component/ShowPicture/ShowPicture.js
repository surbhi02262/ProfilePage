import React, { Component } from 'react';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import DialogWrapper from '../DialogWrapper/DialogWrapper';
import {connect} from 'react-redux';
import { upload} from '../../Store/UserInfo/actions';
import {CameraAlt} from '@material-ui/icons'

class ShowPicture extends Component {
    state={
        open:false,
        imageData:"",
    }
    handleUpload = () =>{
        this.setState({open:true})
    }
    closePopUp = () =>{
        this.setState({open:false})
    }
    handleUploadImage = (e) =>{
    //    let a=  URL.createObjectURL(e.target.files[0]);
    //    this.setState({file:a})
    let file = e.target.files[0];
    // let reader = new FileReader();
    // reader.onloadend = () =>{
    //     
    // }
    // reader.readAsDataURL(file);
    //this.props.upload(file)
    this.setState({imageData:file})
    }
    handleSave = (userInfo) =>{        
        // this.setState({imgValue:this.state.imageData,open:false,imageData:""},function(){
        //     this.props.setImage(userInfo._id,this.state.imgValue);
        // })
        this.props.upload(this.state.imageData)
        
    }
    render() {
        const{image,className,user}= this.props;
        const{open,imageData} = this.state;
        return (
            <div className={className}>
                <img src={image} alt="test"/>
                <div className="black-strip">
                    {/* <ButtonWrapper >Upload Image</ButtonWrapper> */}
                    <CameraAlt onClick={() => this.handleUpload()}/>

                </div>
                <DialogWrapper open={open} title="Upload Image" handleClose={this.closePopUp} btnAction="Save"  
                handleSave={() => this.handleSave(user)}>
               <input type="file" onChange={(e) => this.handleUploadImage(e)}/>
               <div className="upload-image-container">
                    <img src={imageData} alt=""/>
                </div>
            </DialogWrapper>
            </div>
        );
    }
}

const mapDispatchToProps ={
    upload,
}
export default connect(null,mapDispatchToProps)(ShowPicture)
