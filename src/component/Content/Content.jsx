import React from 'react'
import './Content.css'
import { Form, Button } from 'react-bootstrap'

function Content() {
    return (
        <>
            <section>
                <div className='container'>
                    <div  className='position-relative mb-5'>
                        <div className='heading_container p-2 text-center'>
                            <h2>
                                <span>Get In Touch</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Name" className='border-0 border-bottom bg-transparent' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="email" placeholder="Email" className='border-0 border-bottom bg-transparent' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="tell" placeholder="Phone Number" className='border-0 border-bottom bg-transparent' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder="Message" className='border-0 border-bottom bg-transparent' />
                                </Form.Group>
                                <Button variant="dark" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </div>
                        <div className="col-6">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1uvkm-eimyrbjdmmBF_uXsKhMyBY&hl=en_US&ehbc=2E312F" width="640" height="480"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content