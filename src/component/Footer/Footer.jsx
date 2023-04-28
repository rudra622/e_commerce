import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <>
            <footer>
                <div className='footer bg-dark mt-5'>
                    <div className='container text-center'>
                        <div className='row'>
                            <div className='logo mt-5 mb-5'>
                                <h2><a href="" className='text-decoration-none text-white'>E-commerce</a></h2>
                            </div>
                            <form>
                                <div className='form justify-content-between'>
                                    <input type="text" placeholder='Your Email'  className=' border-0 bg-transparent text-white' />
                                    <button className='btn bg-transparent border-0 text-white'>SUBSCRIBE</button>
                                </div>
                            </form>
                            <div className="">
                                <ul className="list-unstyled d-flex justify-content-center">
                                    <li className="nav-item active p-4">
                                        <a href="#" className="nav-link text-white">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white p-4" href="#">Page</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white p-4">Product</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white p-4">Customer servies</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white p-4">Contact</a>
                                    </li>
                                </ul>
                                <h2 className='text-white mb-4'>Help Line Number : +1 1800 1200 1200</h2>
                            </div>
                            <div className='footer-end text-white'>
                                <p>@2023 All Right Reserved . By Rudra Dobariya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer