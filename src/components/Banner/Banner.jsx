import React from 'react'
import './Banner.css'
import { useState,useEffect } from 'react'
import axios  from '../../config/axios'
import {API_KEY,IMAGE_URL}  from '../../constants/constant'


function Banner() {
    const [movie,setMovie] = useState({})
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}`).then((res)=>{
            // console.log(res.data.results[0]);
            setMovie(res.data.results[2])
        });

    },[])   



    return (
        <div style={{backgroundImage:`url("${IMAGE_URL + movie.backdrop_path}")`}} className='banner'>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie ? movie.title : ''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='banner__description'>{movie.overview}</h1>
            </div>

            <div className="fade_bottom">

            </div>

        </div>
    )
}

export default Banner