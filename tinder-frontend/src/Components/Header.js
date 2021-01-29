import React from 'react'
import {
  Link
} from "react-router-dom"
import './Header.css'

import { Person, Forum } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'

function Header() {
    //console.log('mon header')
    return (
        <div className='header'>
            <Link to={'/profil'}>
                <IconButton>
                    <Person fontSize='large' className='header__icon' />
                </IconButton>
            </Link>

            <Link to={'/'}>
                <img
                className='header__logo'
                src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'
                alt='Tinder Logo'
                />
            </Link>

            <Link to={'/chat'}>
                <IconButton>
                    <Forum fontSize='large' className='header__icon' />
                </IconButton>
            </Link>
        </div>
    )
}

export default React.memo(Header)