import React from 'react'
import { Instagram, Facebook, GitHub, LinkedIn } from '@mui/icons-material'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div>
                <Instagram />
                <Facebook />
                <GitHub />
                <LinkedIn />
            </div>
        </div>
    )
}

export default Footer