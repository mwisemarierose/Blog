import React from 'react'
import login from '../assets/login';


const Login = () => {

    
    return ( 

        <div className="app" >
          {/* <div className="slice-a">
        <img src={login} alt="Login svg" />
        <div className="welcome-text">
          <h2>Welcome, we are happy to have you back</h2>
          <p>
            “Every moment and every event of every man’s life on earth plants
            something in his soul”
          </p>
        </div>
      </div> */}
        <div className='login'>
          <h1> Login</h1>
          <div className='container'>
            <div className='top'>
              <i class='fab fa-google'></i>
              <i class='fab fa-facebook-square'></i>
              <i class='fab fa-linkedin'></i>
              <i class='fab fa-twitter-square'></i>
              <i class='fab fa-apple'></i>
            </div>
            <p className='divider'><span>Or</span></p>
            <form>
              <label>E-mail</label>
              <input type='email' placeholder='Enter your email' />
              <label>Password</label>
              <input type='password' placeholder='Enter your password' />
              <div className='remember'>
                <input type='checkbox'  />
                <p>Remember Me</p>
              </div>
              <button>Log In</button>
            </form>
            <div className='bottom'>
              <p>Forget your password?</p>
              <a href='/'>Reset Password</a>
            </div>
          </div>
          
        </div>
      </div>

       
     );
}
 
export default Login;