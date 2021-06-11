import React from 'react'
import Home from './containers/Home/Home'
import NewLink from './containers/NewLink/NewLink'
import Navbar from './containers/Navbar/Navbar'
import Dashboard from './containers/Dashboard/Dashboard'
import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'; 

export const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        {/* <Route path = "/" exact component = {Landing} /> */}
        <Route path = "/"  exact component = {Home} />
        <Route path = "/newlink" component = {NewLink} />
        <Route path = '/dashboard' component = {Dashboard}/>
    </Router>
      
      
    </div>
  )
}

export default App;