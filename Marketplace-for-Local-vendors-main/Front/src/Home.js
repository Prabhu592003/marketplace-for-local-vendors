import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <>
    <div className='f1'>
    <div className='f1f1Home'>
    <h2 className="f1f1h2">For <span className="f1f1hs">Shop Owners</span></h2>
    <p className="f1f1p">Boost your shop's efficiency and customer satisfaction with our project, helping you organize and showcase products for easy discovery and increased sales.</p>
    <Link className="f1f1l" to ="/Loginuser">Login</Link>
    </div>
    <div className='f1f2Home'>
    <h2 className="f1f1h2">For <span className="f1f1hs">Customers</span></h2>
    <p className="f1f1p">Welcome to Nearbysearch Easily locate your desired products in the shop and enjoy a seamless shopping experience like never before.</p>
    <Link className="f1f1l" to ="/Logincustomer">Login</Link>
    </div>
    </div>

   
    </>
  )
}

export default Home