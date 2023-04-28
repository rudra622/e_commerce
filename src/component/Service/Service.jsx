import React from 'react'
import './Service.css'

function Service() {
    return (
        <>
            <section>
                <div className='service'>
                    <div className='container'>
                        <div className='row'>
                            <div className='head col-12 text-center mb-4'>
                                <h2 className='fs-1 text-uppercase'>Service</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq</p>
                            </div>
                            <div className="col-4  text-center">
                                <div className="icon_1">
                                    <img src="../img/icon-1.png" alt="" />
                                </div>
                                <h1 className="website_text">website element</h1>
                                <p className="dolor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq</p>
                            </div>
                            <div className="col-4  text-center">
                                <div className="icon_1">
                                    <img src="../img/icon-2.png" alt="" />
                                </div>
                                <h1 className="website_text">APPLICATINOS ELEMENT</h1>
                                <p className="dolor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq</p>
                            </div>
                            <div className="col-4  text-center">
                                <div className="icon_1">
                                    <img src="../img/icon-3.png" alt="" />
                                </div>
                                <h1 className="website_text">DESIGN ELEMENT</h1>
                                <p className="dolor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service