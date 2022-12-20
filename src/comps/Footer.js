import React from 'react'
import { Instagram, Facebook, GitHub, LinkedIn } from '@mui/icons-material'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://github.com/alinacaf10'>
                <GitHub />
                </a>
                <a href='https://www.linkedin.com/in/ali-nacafov-40ba19225/'>
                <LinkedIn />
                </a>
                <a href="https://www.instagram.com/thenacaf/">
                    <Instagram />
                </a>
                <a href='https://www.facebook.com/profile.php?id=100006247608419'>
                    <Facebook />
                </a>

            </div>
        </div>
    )
}

export default Footer