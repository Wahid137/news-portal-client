import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import UseTitle from '../../../hooks/UseTitle';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
    UseTitle("Register")

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success("Please verify your email address")


            })
            .catch(error => setError(error.message))


    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to="/terms">Terms And Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;