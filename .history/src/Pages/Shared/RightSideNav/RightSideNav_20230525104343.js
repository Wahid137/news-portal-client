import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
    const
    return (
        <div className='ps-3'>
            <ButtonGroup vertical >
                <Button className='mb-2' variant="outline-primary"><FaGoogle className='me-2'></FaGoogle>Login with Google</Button>
                <Button className='mb-2' variant="outline-primary"><FaGithub className='me-2'></FaGithub>Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us on</h5>
                <ListGroup>
                    <ListGroup.Item action className='mb-2 '><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item action className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
                    <ListGroup.Item action className='mb-2'><FaTwitter></FaTwitter>Twitter </ListGroup.Item>
                    <ListGroup.Item action className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-5'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;