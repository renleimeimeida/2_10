import React,{Component} from 'react';
import Search from './Components/search/search'
import List from './Components/list/list'

export default class App extends Component{

  render(){
    return(

        <div className="container">
          <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <Search/>
          </section>
            <List/>
        </div>

    )
  }
 
}
