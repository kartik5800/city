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

    let login_set = {
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }

    let signup_set = {
        name: yup.string().required('please enter name'),
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }


    let schema, initVal;
    if (userType === "login") {
        schema = yup.object().shape(login_set);
        initVal = {
            email: '',
            password: ''
        }
    } else if (userType === "signup") {
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
            alert(JSON.stringify(values, null, 2));
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
                    <formik value={formik}>
                        <form onSubmit={formik.handleSubmit}>
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
                                            />
                                            <p>{formik.values.name}</p>
                                            <div className="validate" />
                                        </div>
                                }



                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email} />
                                        <p>{formik.values.email}</p>
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
                                    <p>{formik.values.password}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="submit" className="form-control" name="submit" id="submit" />
                                    <div className="validate" />

                                </div>
                                {
                        userType === 'Login' ?
                            <div className='text-center buttons'>
                                <button type='submit'>login</button>
                            </div>
                            :
                            <div className='text-center'>
                                <button type='submit'>Login</button>
                            </div>
                    }
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

                            </div>
                        </form>
                    </formik>
                    <div>
                    </div>
                </div>
            </div>


        </section >
    );
}





export default Auth;