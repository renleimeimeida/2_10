import React,{Component} from 'react'
import {Button,Input,message} from 'antd'


export default class App extends Component{
    show=()=>{
        message.success('成功了',0.5)
    }
    show2=()=>{
        message.error('失败了',0.5)
    }
    render(){
        return (
            <div>
                
                <Input style={{width:'100px'}}/>
                <Button type="primary" onClick={this.show}>提交</Button>
                <Button type="danger" onClick={this.show2}>Danger</Button>
            </div>
        )
    }
}


