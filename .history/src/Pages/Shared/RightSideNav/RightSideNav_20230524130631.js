import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSideNav = () => {
    return (
        <ButtonGroup vertical className='pl-3'>
            <Button className='mb-2' variant="outline-primary"><FaGoogle className='me-2'></FaGoogle>Login with Google</Button>
            <Button className='mb-2' variant="outline-primary"><FaGithub className='me-2'></FaGithub>Login with Github</Button>
        </ButtonGroup>
    );
};

export default RightSideNav;