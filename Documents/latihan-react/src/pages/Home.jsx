
import React, { Components } from 'react';
import {Navbar,Container,Nav,Card} from 'react-bootstrap';
import morbius from '../img/morbius.jpg';
import '../css/Home.css';
import axios from 'axios';

class Homepage extends React.Component{
    render(){
        return (
            <div id='wrap' className='Container'>
                <div id='baris' className='row'>
                    <div className='col-2'>
                        <div className='kartu' style={{ width: '18rem' }}>
                                <Card.Img className='gambar-1' variant="top" src={morbius} />
                            <Card.Body>
                                <Card.Title className='judul-1'>Morbius</Card.Title>
                            </Card.Body>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='kartu' style={{ width: '18rem' }}>
                                <Card.Img className='gambar-1' variant="top" src={morbius} />
                            <Card.Body>
                                <Card.Title className='judul-1'>Morbius</Card.Title>
                            </Card.Body>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='kartu' style={{ width: '18rem' }}>
                                <Card.Img className='gambar-1' variant="top" src={morbius} />
                            <Card.Body>
                                <Card.Title className='judul-1'>Morbius</Card.Title>
                            </Card.Body>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='kartu' style={{ width: '18rem' }}>
                                <Card.Img className='gambar-1' variant="top" src={morbius} />
                            <Card.Body>
                                <Card.Title className='judul-1'>Morbius</Card.Title>
                            </Card.Body>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='kartu' style={{ width: '18rem' }}>
                                <Card.Img className='gambar-1' variant="top" src={morbius} />
                            <Card.Body>
                                <Card.Title className='judul-1'>Morbius</Card.Title>
                            </Card.Body>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}

export default Homepage;
