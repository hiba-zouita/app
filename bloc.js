import React, { Component } from "react";
import axios from "axios";
class Blog extends Component {
    state={
        users:[]
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            console.log(res.data);
            this.setState({users : res.data})
        }
            )
    }
    render(){
        const {users} =this.state
        const listUser = users.map(user =>{
            return(
                <div key = {user.id}>
                    <div className ="user">
                    <div> name : { user.name}</div>
                    <div> username : { user.username}</div>


                </div>
                </div>
            )
        })
        return(
            <div> 
             <h2>Blog</h2>
            <p>this Blog section</p>
            <div>
                {listUser}
            </div>
            </div>
        )
    }
}
export default Blog;