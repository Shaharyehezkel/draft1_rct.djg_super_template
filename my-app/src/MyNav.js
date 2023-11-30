import React from 'react'
import { Outlet, Link } from "react-router-dom";

const MyNav = () => {
    return (
        <div>
            <br />
            <h1>SuperMarket</h1>
            <Link to="/welcome" className='btn btn-outline-primary'> to the supermarket</Link>{" "}
            <Link to="/home" className='btn btn-outline-secondary'>our home page</Link>{" "}
            <Link to="/about" className='btn btn-outline-success'>about us:</Link>{" "}
            <Link to="/product" className='btn btn-outline-danger'>products:</Link>{" "}
        </div>
    )
}

export default MyNav