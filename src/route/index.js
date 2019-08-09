import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'

const Home = (props) => {
        return (<>
                <Switch>
                    {
                        props.routers.map((item)=>(
                            item.path ?<Route key={item.path} path = {item.path} render = {(hash) => <item.component hash = {hash}>
                                {<Home routers = {item.children}></Home>}
                            </item.component>}></Route>: <Redirect {...item} key={item.to}></Redirect>
                        ))
                    }    
                </Switch>
        </>)
}

export default Home