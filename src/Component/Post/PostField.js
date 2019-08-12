import React, { Component } from 'react';
import TextAreaWrapper from '../TextAreaWrapper/TextAreaWrapper';
import {AddAPhoto, VideocamOutlined as Youtube} from '@material-ui/icons'
import {connect} from 'react-redux';
import {savePost,uploadImagePost} from '../../Store/Post/actions';
import DialogWrapper from '../DialogWrapper/DialogWrapper';

class PostField extends Component {
    state={
        post:"",
        imageData :'',
        open:false,
        imageString:'',
        videoLink: '',
        isVideo: false
    }
    savePost = () =>{
        console.log('p',this.state.post);
        let postD = {message : this.state.post}
        if(this.state.videoLink.length > 0) {
            postD.video = this.state.videoLink
        }
        this.props.savePost(postD);
        this.setState({post:"", isVideo:false, videoLink: '',open:false, })     
    }
    handleChange = (name,value)=>{
        this.setState({post:value})
    }
    handleUpload = (e) =>{
        console.log('phandleUpload');
        this.setState({open:true, post:'', imageString:"",videoLink: '',isVideo:false });
    }
    closePopUp = () =>{
        this.setState({open:false})
    }
    handleUploadImage = (e) =>{
        let file = e.target.files[0];
        var reader = new FileReader();
        let that = this;
        reader.onloadend = function() {
         that.setState({imageString:reader.result});
        }
        reader.readAsDataURL(file);
        this.setState({imageData:file,},function(){
            console.log('imageData',this.state.imageData);
        })
        
    }
    handleSave = () =>{
        this.props.uploadImagePost(this.state.imageData,this.state.post,);
        this.setState({open:false, post:'',imageData:'' ,imageString:"",videoLink: '',isVideo:false });
    }
    handleVideoUpload = () => {
        this.setState({open: true, isVideo:true, videoLink: ''})
    }
    handleOnChange = (e) => {
        //https://www.youtube.com/watch?v=XeiOnkEI7XI
        let len = 'https://www.youtube.com/watch'
        let youlink = e.target.value
        if(youlink.length > len.length) {
           let ylin = youlink.split('?')
           
           if(ylin[0] === len) {
            let flin = ylin[1].split("&")[0].split('=')[1]
            this.setState({videoLink: flin})
           }
        }
    }
    render() {
        const{open,imageData,imageString, post, videoLink, isVideo}= this.state;
        return (
                <div className="post-container">
                    <TextAreaWrapper name="post" value={post} onChange={this.handleChange}/>
                    <div className="bar">
                        <div className="image-btn">
                            <button className="postbtn left" onClick={(e) => this.handleUpload(e)}><AddAPhoto/></button>
                            <button className="postbtn left" onClick={(e) => this.handleVideoUpload(e)}><Youtube /></button>
                        </div>
                        <div className="post">
                            <button className="postbtn right" onClick={() => this.savePost()}>Post</button>
                        </div>
                    </div>
                    <DialogWrapper open={open} title="Upload Image" handleClose={this.closePopUp} btnAction="Post"  
                        handleSave={() => isVideo ? this.savePost() : this.handleSave()}
                    >
                        {isVideo 
                        ? <>
                        <input type="text" placeholder="paste youtube link here"  onChange={(e) => this.handleOnChange(e)}/>
                        {videoLink.length > 0 && <div className="post-video-wrapper"><iframe 
                            width="90%" 
                            height="400" 
                            src={`https://www.youtube.com/embed/${videoLink}`}
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe> </div>}</>
                        : <><input type="file" onChange={(e) => this.handleUploadImage(e)}/>
                        <div className="upload-image-container">
                            <img src={imageString} alt=""/>
                        </div></>}
                        <TextAreaWrapper name="post" value={post} onChange={this.handleChange}/>
                    </DialogWrapper>

                    
                </div>
        );
    }
}
const mapDispatchToProps = {
    savePost,
    uploadImagePost
}

export default connect(null,mapDispatchToProps)(PostField);