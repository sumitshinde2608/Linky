import React from 'react'
import Table from './components/Table';
import Button from 'react-bootstrap/Button'
import './Home.css'

export const Home = () => {
    return (
        <div>
        <div className="Table">
        <div className="TableHeader">
            <h2 align="left"><b>My Links</b></h2>
            <Button variant="primary"> Create new link +</Button>{' '}
        </div>
        <br/>
        <Table/>
        </div>
        </div>
    )
}

export default Home;

