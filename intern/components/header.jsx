import { useState } from 'react'
import '../src/header.css'

export default function Header(){
    return(
        <>
            <div className="container">
                <nav>
                <div className="primary-nav">
                    <ul className='primary-nav-items row'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products <i className='arrow down'></i></a></li>
                        <li><a href="#">Resources <i className='arrow down'></i></a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>

                <div className="secondary-nav">
                    <ul className='secondary-nav-items row'>
                        <li className='nav-login'><a href="#">Log in</a></li>
                        <li className='nav-signup'><a href="#">Sign up</a></li>
                    </ul>
                </div>
                </nav>
            </div>
            
        </>
    )
}
