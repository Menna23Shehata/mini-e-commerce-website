import React from 'react'
import img1 from "../../assests/images/img1.jpg"

export default function Error() {
    return (
        <>
            <div style={{ backgroundColor: '#f9fafc' }}>

                <div className="container vh-100 d-flex justify-content-center align-items-center">
                    <img src={img1} alt="error page" className='rounded-circle' />
                    <div className=''>
                        <h1 className='text-uppercase'>page not found</h1>
                        <p> We're sorry, the page you requested could not be found. Please go back
                            to the homepage!</p>
                        <a className='text-capitalize btn btn-primary'>back to homepage</a>
                    </div>

                </div>
            </div>
        </>
    )
}
