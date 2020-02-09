import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {

    delete=(id,username)=>{
        if(window.confirm( `确定要删除[${username}]的评论吗`)){
            this.props.deleteData(id)
        }
    }

    render() {
        let {id,username,discuss}=this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                <a onClick={()=>{this.delete(id,username)}} href="#1">删除</a>
                </div>
                <p className="user"><span >{username}</span><span>说:</span></p>
                <p className="centence">{discuss}</p>
            </li>
        )
    }
}
