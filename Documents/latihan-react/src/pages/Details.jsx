import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Details.css';
import axios from 'axios';

function Detail(){
    const [dataDetail,setDataDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    useEffect( () => {
        const fetchDetail = async() =>{
            try {
                const response = await axios.get
                (`https://api.themoviedb.org/3/movie/${params.id}?
                api_key=b2f0ee9217d829b7deaa3ba29a6f813c&language=en-US`)
    
                setDataDetail(response.data);
                
            } catch (err) {
                console.log(err);
                
            } finally{
                setIsLoading(false)
            }
    
        };

        fetchDetail();
    },[params])

    

    if (isLoading) {
        return <h4>Now Loading...</h4>
    }



        return(
        <div className='background'>
            <div id='flexx' className='row d-flex'> 
                <div className='col-md-4'>
                    <img id='gambar-detail' src={dataDetail.poster_path} alt="" />
                </div>
                <div id='penjelasan' className='col-md-6'>
                    <h1> {dataDetail.original_title} </h1>
                    <i>{dataDetail.tagline}</i> <hr />
                        <div >
                            <section> <h6> Genres : </h6>  
                                <section> <h6> {dataDetail.genre[0]} </h6>  </section>
                                <section> <h6> {dataDetail.genre[1]} </h6></section>
                                <section> <h6> {dataDetail.genre[2]} </h6> </section>
                            </section>
                        </div>
                            <hr />
                                <h6> {dataDetail.release_date}</h6>
                            <hr />
                                <h6> Popularity : {dataDetail.popularity}]</h6>
                            <hr />
                                <h6> Production Companies : {dataDetail.production_company.name}</h6>
                            <hr />
                    </div>
            </div>

                <div className='overview'>
                    <h1> Overview</h1>
                    <p className='danger'>Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.</p>
                </div>
        </div>
            
        )
    }

export default Detail