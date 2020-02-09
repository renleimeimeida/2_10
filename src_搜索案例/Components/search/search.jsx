import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search=()=>{
        const {value}=this.refs.keyWord
        PubSub.publish('MY PANDA',{isFrist:false,isLoading:true})
        axios.get('https://api.github.com/search/users',{params:{q:value}}).then(
            (response)=> {
                PubSub.publish('MY PANDA',{isLoading:false,users:response.data.items})
            },
            (err)=> {
                PubSub.publish('MY PANDA',{isLoading:false,error:err.message})
            }
        )
    }

    render() {
        return (
            <div>
                <input ref="keyWord" type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}
