import React from 'react'
import Table from './components/Table'
import './Dashboard.css'
import Cards from './components/Cards'
const Dashboard = () => {
    return (
        <div>
        <div className="Table">
            <Table/>
        </div>
        <div className="Cards">
        <Cards className="po"/>
        <Cards/>
        <Cards/>
        <Cards/>
        </div>    
        </div>
    )
}

export default Dashboard
