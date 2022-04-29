import React, { useState } from 'react';

function Auth(props) {
    const [userType, setUserType] = useState('Login')
    const [reset, setReset] = useState(false)

    const handletLogin = () => {

    }

    const handleSignup = () => {

    }
    
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
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Password" data-rule="Password" data-msg="Please enter an Password" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="submit" className="form-control" name="submit" id="submit"/>
                            <div className="validate" />
                        </div>
                        {/* </form> */}
                        
                       
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
            </div>
        </section>
    );
}

export default Auth;