import React,{Component} from 'react'
import Add from './component/add/add'
import List from './component/list/list'
import PubSub from 'pubsub-js'

export default class App extends Component{

	state={
		data:[]
	}

	// addData=(oneData)=>{
	// 	let data=this.state.data
	// 	data.unshift(oneData)
	// 	this.setState({data})
		
	// }

	componentDidMount(){
		PubSub.subscribe('get onedata',(msg,oneData)=>{
			let data=this.state.data
			data.unshift(oneData)
			this.setState({data})
		})
	}

	deleteData=(id)=>{
		let data=this.state.data.filter((oneDelete)=>{
			return oneDelete.id !== id
		})
		this.setState({data})

	}

	render(){
		const {data}=this.state
		return (
			<div>
				<header className="site-header jumbotron">
				<div className="container">
					<div className="row">
					<div className="col-xs-12">
						<h1>请发表对React的评论</h1>
					</div>
					</div>
				</div>
				</header>
				<div className="container">
				<Add/>
				<List data={data} deleteData={this.deleteData}/>
				</div>
			</div>
		)
	}
}