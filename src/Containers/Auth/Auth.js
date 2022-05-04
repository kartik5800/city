import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Auth(props) {
    const [userType, setUserType] = useState('Login')
    const [reset, setReset] = useState(false)

    const handletLogin = () => {

    }

    const handleSignup = () => {

    }

    let Login = {
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }

    let loginschema = yup.object().shape(Login)

    const formik = useFormik({
        initialValues: {

            email: '',
            password: ''
        },

        validationSchema: loginschema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    console.log(formik.errors);

    return (
        <section id="appointment" className="appointment d-flex">
            <div className="container">
                <div className='section-title'>
                    {
                        reset ?
                            <h2>Reset Password</h2> :
                            userType === 'Login' ? <h2>Login</h2> : <h2>Signup</h2>
                    }
                </div>
                <div className='php-email-form'>
                    <Formik value={formik}>
                        <Form onSubmit={formik.handleSubmit}>
                            <div className='row align-items-center justify-content-center'>
                                {
                                    userType === 'Login' ? null
                                        :
                                        <div className="col-md-7 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                }
                                {/* <form method="post"> */}
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email} />
                                    <div className="validate" />
                                </div>
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Your Password" 
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                     />
                                    <div className="validate" />
                                </div>
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="submit" className="form-control" name="submit" id="submit" />
                                    <div className="validate" />

                                </div>
                            </div>
                        </Form>
                    </Formik>

                    {
                        userType === 'Login' ?
                            <div className='text-center buttons'>
                                <span>Create New Account</span><button onClick={() => setUserType('Signup')}>Signup</button>
                            </div>
                            :
                            <div className='text-center'>
                                <span>Already have Account</span><button onClick={() => setUserType('Login')}>Login</button>
                            </div>
                    }
                    <div>
                    </div>
                </div>
            </div>

        
        </section >
    );
}

export default Auth;