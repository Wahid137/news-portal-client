import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';


const RightSideNav = () => {
    return (
        <div className='ps-3'>
            <ButtonGroup vertical >
                <Button className='mb-2' variant="outline-primary"><FaGoogle className='me-2'></FaGoogle>Login with Google</Button>
                <Button className='mb-2' variant="outline-primary"><FaGithub className='me-2'></FaGithub>Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item>Whatsapp</ListGroup.Item>
                    <ListGroup.Item>Twitter </ListGroup.Item>
                    <ListGroup.Item>Twitch</ListGroup.Item>

                </ListGroup>
            </div>
            <div>

            </div>
        </div>
    );
};

export default RightSideNav;