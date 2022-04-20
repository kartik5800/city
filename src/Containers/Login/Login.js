import React from 'react';
import {Button} from 'reactstrap'

function Login(props) {
    return (
      <div>
  <form>
    <h1>Login</h1>
    <input type="Email" placeholder="Email" /><br></br>
    <input type="password" placeholder="password" /><br></br>
    <a href="#" className="e">Forgot password?</a><br></br>
    <input type="submit" className="btn" /><br></br>
    <a href="#" >Ragister now</a>
  </form>
</div>

    );
}

export default Login;