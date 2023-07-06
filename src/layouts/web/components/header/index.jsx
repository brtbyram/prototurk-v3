import React from 'react'
import Logo from './logo'
import Search from './search'
import Auth from './auth'

function Header() {
    return (
        <header className='h-14 dark:bg-zinc-900 dark:border-zinc-700 transition-colors border-b border-zinc-200 flex items-center justify-between px-4 fixed top-0 left-0 w-full bg-white z-10'>
            <Logo/>
            <Search/>
            <Auth/>
        </header>
    )
}

export default Header