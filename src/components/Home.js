import React,{Component} from 'react'
// import '../navbar_unit.css'
import Rainbow from "../hoc/Rainbow";
import axios from 'axios'

class Home extends Component{
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
            .catch(err => {
                alert("no posts found error: "+err)
            })
    }
    render(){
        let {posts} = this.state
        const postList = posts.length ?
            (posts.map(post =>
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <a className="card-title" href={"/"+post.id}>{post.title}</a>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )):
            (<div className="center">No posts found</div>)
        return (
                <div className="container">
                    <h2 className="center">Home</h2>
                    <p>{postList}</p>
                </div>
        )
    }
}

export default Rainbow(Home)