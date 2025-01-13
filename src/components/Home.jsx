import React from 'react'
import bg from '../assets/images/bg.webp'
import Products from './Products'
function Home() {
    return (
        <>
            <div className="card  text-white">
                <img src={bg} height="550px" className="card-img" alt="..." />
                <div className="card-img-overlay d-flex justify-content-center flex-column">
                    <div className="container ">
                    <h5 className="card-title fw-bold display-3">All New Seaosnal Arrivals</h5>
                    <p className="card-text  fw-bold fs-2">Go And Check All New Trends</p>
                    </div>
                </div>
            </div>
            <Products/>
        </>
    )
}

export default Home