'use client'
import dynamic from 'next/dynamic'

const SearchBox = dynamic(() => import('./Searchbox'), { ssr: false })

import Image from "next/image";
import logo from '@/public/logo.jpg'; 
import Toggle from './Toggle';
// import SearchBox from "./Searchbox";

export default function Navbar(){
    return (
        <div className='flex justify-between items-center'>
            <Image src={logo} alt="site logo" width={75} loading="eager"/>
            <SearchBox />
            <Toggle/>
        </div>
    )
}