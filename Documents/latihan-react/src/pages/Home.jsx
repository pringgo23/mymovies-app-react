import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

function Homepage(props){
    const navigate = useNavigate();
    
        return (
            <div id='wrap' className='Container'>
                <div id='baris' className='row'>
                    {props.posts && props.posts.map((el,i) => (
                        <div className='col-2' key={i}>
                            <div className='kartu' style={{ width: '18rem' }}>
                                    <Card.Img className='gambar-1' variant="top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} />
                                <Card.Body>
                                    <Card.Title className='judul-1' onClick={() => {
                                        navigate(`/detail/${el.id}`) 
                                    }} >{el.title}</Card.Title>
                                </Card.Body>
                            </div>
                        </div>
                        )
                    )}   
                </div>
            </div>
        )
    }

export default Homepage;
