import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from "react-icons/fa";


const RightSideNav = () => {
    return (
        <ButtonGroup vertical>
            <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
        </ButtonGroup>
    );
};

export default RightSideNav;