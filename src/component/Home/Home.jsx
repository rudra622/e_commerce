import React from 'react'
import Slider from '../slider/Slider'
import Product from '../Product/Product'
import Service from '../Service/Service'
import Content from '../Content/Content'
import Blog from '../Blog/Blog'

function Home() {
    return (
        <>
            <Slider />
            <Product />
            <Service />
            <Blog/>
            <Content />
        </>
    )
}

export default Home