import React, {Component} from 'react';
class LikeButton extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
    return (
        <button onClick={this.props.buttonClick}>
        <span>${this.props.isLiked ? '取消' : '点赞'}</span>
        <span>👍</span>
    </button>
    )
    }
}
export default LikeButton;