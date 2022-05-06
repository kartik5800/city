import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Auth(props) {
    const [userType, setUserType] = useState('Login')
    const [reset, setReset] = useState(false)

    const handletLogin = (values) => {
        alert(JSON.stringify(values, null, 2));

    }

    const handleSignup = (values) => {
        alert(JSON.stringify(values, null, 2));

    }

    let login_set = {
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }

    let signup_set = {
        name: yup.string().required('please enter your name'),
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }


    let schema, initVal;
    if (userType === "Login") {
        schema = yup.object().shape(login_set);
        initVal = {
            email: '',
            password: ''
        }
    } else if (userType === "Signup") {
        schema = yup.object().shape(signup_set);
        initVal = {
            name: '',
            email: '',
            password: ''
        }
    }

    const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            if (userType === "Login") {
                handletLogin(values)

            } else if (userType === "Signup") {
                handleSignup(values)
            }
            resetForm();
        }
    })


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
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                onBlur={formik.handleBlur}

                                            />

                                            {
                                                formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                            }

                                            <div className="validate" />
                                        </div>
                                }



                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ''
                                    }

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
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.errors.password && formik.touched.password ? <p>{formik.errors.password}</p> : ''
                                    }

                                    <div className="validate" />
                                </div>
                                {/* <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="submit" className="form-control" name="submit" id="submit" />
                                    <div className="validate" />

                                </div> */}
                                {
                                    userType === 'Login' ?
                                        <div className='text-center buttons'>
                                            <button type='submit'>login</button>
                                        </div>
                                        :
                                        <div className='text-center'>
                                            <button type='submit'>Signup</button>
                                        </div>
                                }
                                {
                                    userType === 'Login' ?
                                        <div className='text-center buttons'>
                                            <span>Create New Account</span><a onClick={() => setUserType('Signup')}>Signup</a>
                                        </div>
                                        :
                                        <div className='text-center'>
                                            <span>Already have Account</span><a onClick={() => setUserType('Login')}>Login</a>
                                        </div>
                                }

                            </div>
                        </Form>
                    </Formik>
                    <div>
                    </div>
                </div>
            </div>


        </section >
    );
}





export default Auth;