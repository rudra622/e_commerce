import React from 'react'
import './product.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAsync } from '../../services/action/ProductAction'
import { useEffect } from 'react'
function Product() {

    const { Products } = useSelector(state => state.productReducer)

    const dispatch = useDispatch()

    const get = () => {
        dispatch(getProductsAsync())
    }
    useEffect(() => {
        get();
    }, [])
    return (
        <>
            <section>
                <div className='container'>
                    <div className='Product-haed col text-center'>
                        <h2>Man & Woman Fashion</h2>
                    </div>
                    <div className='row'>
                        {
                            Products.map((pros) => {
                                return (
                                    <>
                                        <div className='col-4'>
                                            <div className="box-main text-center">
                                                <h4 className='shirt-text'>{pros.title}</h4>
                                                <p className='price-text'>price :
                                                    <span>{pros.price}</span>
                                                </p>
                                                <div className='t-shirt-img'>
                                                    <img src={pros.img} alt="" />
                                                </div>
                                                <p className='details'>
                                                    {pros.details}
                                                </p>
                                                <div className='btn-main d-flex justify-content-between'>
                                                    <div className='buy-bt'><a href="" className='text-decoration-none' >buy now</a></div>
                                                    <div className='seemore-bt'><a href="" className='text-decoration-none text-dark '>see more</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Product