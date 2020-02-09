import React,{Component} from 'react'
import Detail from '../Home_Message_detail/detail'
import Button from '../../components/Button/Button'
import {Link,Route}  from 'react-router-dom'

export default class Message extends Component{

    state={
        data:[]
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                data:[
                    {id:1,title:"消息1"},
                    {id:2,title:"消息2"},
                    {id:3,title:"消息3"}
                ]
            })
        },1000)
    }

    repalceShow=(id)=>{
        this.props.history.replace(`/home/message/detail/${id}`)
    }

    pushShow=(id)=>{
        this.props.history.push(`/home/message/detail/${id}`)
    }

    back=()=>{
        this.props.history.goBack()
    }
    nextStep=()=>{
        this.props.history.goForward()
    }
    render(){
        return(
            <div>
                <ul>
                    {this.state.data.map((dataObj)=>{
                       return <li key={dataObj.id}>
                                    <Link to={`/home/message/detail/${dataObj.id}`}>{dataObj.title}</Link>&nbsp;&nbsp;
                                    <button onClick={()=>{this.pushShow(dataObj.id)}}>push查看</button>
                                    <button onClick={()=>{this.repalceShow(dataObj.id)}}>repalce查看</button>
                                    <Button id="zijian" onClick={()=>{this.repalceShow(dataObj.id)}}>repalce查看,自我封装</Button>
                                </li>
                    })}
                </ul>
                <hr/>
                <Route path="/home/message/detail/:id" component={Detail}/>
                <Button onClick={this.back}>返回</Button>
                <Button onClick={this.nextStep}>前进</Button>
            </div>
        )
    }
}