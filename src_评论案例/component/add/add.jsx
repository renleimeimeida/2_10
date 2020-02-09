import React, { Component } from 'react'
import uuid from 'uuid'
import PubSub from 'pubsub-js'

export default class Add extends Component {

    dianjihuoqu=()=>{
        let username=this.input1.value
        let discuss=this.textarea1.value
        if(!username.trim() || !discuss.trim()){
            alert('必须填写用户名和评论,且不能为空')
            return
        }
        // this.props.addData({id:uuid(),username,discuss})
        PubSub.publish('get onedata',{id:uuid(),username,discuss})
        this.input1.value=""
        this.textarea1.value=""
    }

    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                <div className="form-group">
                    <label>用户名</label>
                    <input ref={(input)=>{this.input1=input}} type="text" className="form-control" placeholder="用户名"/>
                </div>
                <div className="form-group">
                    <label>评论内容</label>
                    <textarea ref={(textarea)=>{this.textarea1=textarea}} className="form-control" rows="6" placeholder="评论内容"></textarea>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button type="button" onClick={this.dianjihuoqu} className="btn btn-default pull-right">提交</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}
