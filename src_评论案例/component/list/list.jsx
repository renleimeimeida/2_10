import React, { Component } from 'react'
import './list.css'
import Item from '../item/item'

export default class List extends Component {
    render() {
        let {data,deleteData}=this.props
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:data.length?'none':'block' }}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        data.map((oneData)=>{
                            return <Item key={oneData.id} {...oneData} deleteData={deleteData}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
