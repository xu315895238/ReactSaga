import React, {Component} from 'react'
class sub extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : props.count
        }
    }
    static getDerivedStateFromProps(propss,states){
       
        return propss
        
    }
    render() {
        let {count} = this.state;
        return (
            <div>
                {count}
            </div>
        );
    }
}

export default sub;