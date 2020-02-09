import React, { Component } from 'react'
import Item from '../item/item'
import PubSub from 'pubsub-js'


export default class List extends Component {

    state={
        isFrist:true,
        isLoading:false,
        error:'',
        users:[]
      }

    componentDidMount(){
        PubSub.subscribe('MY PANDA',(msg,data)=>{
            this.setState(data)
        })
    }

    render() {
        const {isFrist,isLoading,error,users}=this.state
        if(isFrist){
            return <h2>请输入登入名查找用户</h2>
        }else if(isLoading){
            return <h2>Loding</h2>
        }else if(error){
            return <h2>{error}</h2>
        }else{
            return(
                <div className="row">
                    {
                        users.map((personObj)=>{
                            return <Item key={personObj.login} {...personObj}/>
                        })
                    }
                </div>
            )
        }
    }
}
