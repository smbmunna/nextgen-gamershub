'use client'
import Image from "next/image";
import Toggle from './Toggle';
import SearchBox from "./Searchbox";
import Link from 'next/link';

export default function Navbar(){
    return (
        <div className='flex justify-between items-center'>
            <Link href={'/'} className='flex items-center gap-2'>
                <Image src={'/logo.jpg'} alt="site logo" width={75} height={75} loading="eager"/>
            </Link>
            <SearchBox />
            <Toggle/>
        </div>
    )
}