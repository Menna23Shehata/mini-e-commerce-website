import React, { useEffect, useState } from 'react'
import './Main.css'
import axios from 'axios'
import { baseUrl } from '../../utils/baseUrl.js'
import Loading from '../Loading/Loading.jsx'
import Error from '../Error/Error.jsx'
export default function Main() {

    const [product, setproduct] = useState([])

    const getAllProducts = async () => {
        try {
            let { data } = await axios.get(`${baseUrl}/products`)
            console.log(data);
            setproduct(data)

        } catch (error) {
            <Error/>
            console.log("errrrrr", error);

        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <>
            <div className="container mx-auto mt-5">
                {product.length !== 0 ?
                    <div className="row g-4">
                        {product.map((p) => {
                            return (
                                <div className="col-lg-3 col-md-4 d-flex align-items-stretch" key={p.id}>
                                    <div className="card text-center overflow-hidden border-0">
                                        <img src={p.image} className="card-img-top w-100 p-3" alt="product image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{(p.title).slice(0, 20)}</h5>
                                            <p className="card-text">{(p.description).slice(0, 100)}</p>
                                            <p className='card-text float-start'>{p.price} $</p>
                                            <p className='card-text float-end'>{p.rating.rate} <i className='fas fa-star rating-color'></i></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div> : <Loading />}
            </div>
        </>
    )
}
