import { useState } from "react"
import '../src/signup.css'

import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'SUPABASE_CLIENT_API_KEY'

const SUPABASE_URL = "https://fnasaphvavbzdehbiixa.supabase.co"
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);




export default function Signup(){

    function login() {
        supabase.auth.signInWithOAuth({
          provider: 'google',
        })  
      }

    return(
        <>
            
      
            <div className="hero-wrap">
            <div className="logo">
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="glass"></div>
                    </div>
                </div>

            </div>
                <div className="wrapper">
                    <form>
                    <h1 className="text-center">Log in to your account</h1>
                    <p className="text-center">Welcome back! Please enter your details.</p>

                    <div className="hero-btn text-center">
                        <button type="submit">Sign up</button>
                        <button type="submit">Log in</button>
                    </div>

                    <div className="input-box">
                        <div className="wrap-email">
                            <p>Email</p>
                            <input type="text" placeholder="   Enter your email"  required/>
                        </div>
                        <div className="wrap-password">
                            <p>Password</p>
                            <input type="text" placeholder=" ........" required/>
                        </div>
                        
                    </div>

                    <div className="remember-item">
                        <label htmlFor=""><input type="checkbox" name="" id="" />Remember for 30 days</label>
                        <a href="#">Forgot password</a>
                    </div>

                    <button type="submit" className="sign-in-btn signin-primary">Sign in</button>
                    <button type="submit" className="signin-secondary" onClick={login}><i class="fa-brands fa-google"></i> Sign in with Google</button>
 

                    <div className="signup-link">
                        <p>Don't have an account? <a href="#">Sign up</a> </p>
                    </div>

                    </form>
                </div>
            </div>
        </>
    )
}