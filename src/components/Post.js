import React from 'react'
import {Component} from 'react'
import axios from 'axios'
import '../static/post.css'

class Post extends Component{
    state = {
        post: null
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.post_id)
            .then(res =>{
                console.log(">>>>res data:"+JSON.stringify(res))
                this.setState({
                    post: res.data
                })
            })
            .catch(err => {
                console.log("post not available, error: "+err)
                alert("post not available, error: "+err)
            })
    }
    render(){
        let {post} = this.state
        let imgStyle  = {
            height: '100%',
            boxShadow: '0 0 5px 20px #4d4d00'
        };
        /*let fontStyle = {
          fontFamily: 'roboto'
        };*/
        const postCard = post?
            (<div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card blue-grey darken-1">
                            <div className="card-image  waves-effect waves-block waves-light col s6 m6" style={imgStyle}>
                                <img src="https://i.ytimg.com/vi/JUWgGzqxgQo/maxresdefault.jpg" />
                            </div>
                            <div className="card-content black-text col s6 m6" style={{fontFamily: 'indie',fontSize: '0.3em'}}>
                                <span className="card-title">{post.title}</span>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>):
            (<div className="container">post not found</div>)
        return (
            <h2>{postCard}</h2>
        )
    }
}

export default Post