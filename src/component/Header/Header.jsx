import React from 'react'
import { Dribbble, Facebook, Instagram, PhoneFill, Search, TelephoneFill, Twitter } from 'react-bootstrap-icons'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header>
                <div className="wrap bg-dark">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col">
                                <p className="mb-0 phone"><TelephoneFill className='text-secondary' /> <a href="#" className='text-decoration-none'>+00 1234 567</a></p>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <div className="social-media">
                                    <p className="mb-0 d-flex">
                                        <a href="#" className="d-flex align-items-center justify-content-center"><Facebook /></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><Twitter /></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><Instagram /></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><Dribbble /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark  border-bottom shadow">
                    <div className="container">
                        <a className="navbar-brand text-dark" href="">E-commerce</a>
                        <form className="searchform order-sm-start order-lg-last">
                            <div className="form-group d-flex">
                                <input type="text" className="form-control pl-3" placeholder="Search" />
                                <button type="submit" placeholder className="form-control search"><Search /></button>
                            </div>
                        </form>
                        {/* <button className="navbar-toggler" type="button">
                            <span className="fa fa-bars" /> Menu
                        </button> */}
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link text-dark">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-dark" to='/product'>Product</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/service' className="nav-link text-dark">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/blog' className="nav-link text-dark">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/content' className="nav-link text-dark">content</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

        </>
    )
}

export default Header