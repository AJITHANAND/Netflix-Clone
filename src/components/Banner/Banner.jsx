import React from 'react'
import './Banner.css'


function Banner() {
    return (
        <div className='banner'>
            <div className='banner__contents'>
                <h1 className='banner__title'>Movie Name</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='banner__description'>Description :In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</h1>
            </div>

            <div className="fade_bottom">

            </div>

        </div>
    )
}

export default Banner