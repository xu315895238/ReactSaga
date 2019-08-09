import React, {Component} from 'react'
import {NavLink} from 'react-router-dom' 
import Sub from './sub'
import {connect} from 'react-redux'

import Each from './ams'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    render () {
        let {count} = this.state
        let {num} = this.props
        return (<>
            <div>
                home
                {/* <Sub count={count}></Sub>
                <button onClick={()=>this.setState({count:2})}>点击</button>
                <NavLink to = '/home/history'>历史</NavLink>
                <NavLink to = '/home/homesub'>子页</NavLink>

                <p>{num}</p>
                <button onClick={()=>this.props.dispatch({type:'ADDS',value:'666'})}>saga</button>

                {this.props.children} */}
                    123
                <div ref='ditu'>
                
                </div>

            </div>
        </>)
    }

    asfn(){
        
    }
    componentDidMount(){
        Each(this.refs.ditu)
    }
}


export default connect((state)=>{
    return state
})(Home)