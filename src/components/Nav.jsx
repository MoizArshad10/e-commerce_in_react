import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {NavLink} from 'react-router-dom'
function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-3">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4 fw-bold" href="#">Fusion Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/products"}>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/about"}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <button className='btn btn-outline-warning  me-2 fs-6 fw-bold'>
                                <i className='fa fa-sign-in me-2'></i>
                                Login
                            </button>
                            <button className='btn btn-outline-warning me-2 fs-6 fw-bold'>
                                <i className='fa fa-user-plus me-2'></i>
                                Register
                            </button>
                            <button className='btn btn-outline-warning  me-2 fs-6 fw-bold'>
                                <i className='fa fa-cart-plus me-2'></i>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav