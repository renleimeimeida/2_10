import React,{Component} from 'react'
import Message from '../Home_message/message'
import News from '../Home_news/news'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'

export default class Home extends Component{
    render(){
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                <ul className="nav nav-tabs">
                    <li>
                    <NavLink className="list-group-item" to="/home/news" activeClassName="test">News</NavLink>
                    </li>
                    <li>
                    <NavLink className="list-group-item" to="/home/message" activeClassName="test">Message</NavLink>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/message" component={Message}/>
                        <Redirect to="/home/news"/>
                    </Switch>
                </div>
                </div>
          </div>
        )
    }
}