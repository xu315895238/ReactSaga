import React from 'react';
import './App.css';
import routerList from './route/routerList'
import RouterFn from './route'
import {BrowserRouter} from 'react-router-dom'

import {connect} from  'react-redux'

/*
var arr = (obj, type) => {
    var a = obj.filter(item => !item.path || item.permission.indexOf(type) !== -1);

		a.forEach(e => {
			if(e.children){
				e.children = arr(e.children, type)
			}
    })

		return a
  }
  
  routerList = arr(obj.routes,'管理员')
*/
function App() {
  return (
    <div className="App">
 
      <BrowserRouter>
        <RouterFn routers = {routerList}></RouterFn>
      </BrowserRouter>
    </div>
  );
}

export default App
