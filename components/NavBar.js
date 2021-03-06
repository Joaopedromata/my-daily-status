import React from 'react';
import Link  from 'next/link';
const NavLink = ({href, children}) => {
    return(
        <Link href={href}>
            <a  className='p-4 hover:underline'>{children}</a>
        </Link>
    )
}




const Navbar = () => {
    return(
        <div className='bg-gray-500 py-4 text-center'>
            <NavLink href='/sobre'>Sobre</NavLink>
            <NavLink href='/cadastro'>Cadastro</NavLink>
            <NavLink href='/entrar'>Entrar</NavLink>
        </div>
    )
}

export default Navbar