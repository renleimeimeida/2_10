import React,{Component} from 'react'

export default class Detail extends Component{

    state={
        detailData:[
            {id:'1',title:"坏消息1",content:"我去"},
            {id:'2',title:"坏消息2",content:"我靠"},
            {id:'3',title:"坏消息3",content:"我晕"}
        ]
    }

    render(){
        const {id}=this.props.match.params
        const result=this.state.detailData.find((item)=>{
            return item.id===id
        })
        return(
            <ul>
                <li>ID:{result.id}</li>
                <li>TITLE:{result.title}</li>
                <li>CONTENT:{result.content}</li>
            </ul>
        )
    }
}