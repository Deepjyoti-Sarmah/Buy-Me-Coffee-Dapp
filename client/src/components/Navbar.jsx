import React from 'react'

const Navbar = () => {
    return (
    <>
        <header className="my-8 mx-4 sm:mt-9 md:bg-white font-semibold md:rounded-full md:drop-shadow-lg tracking-wider">
            <div className="px-0 sm:py-4 md:px-8 flex items-center justify-center rounded-full">
                <nav>
                    <ul className="flex items-center justify-center md:space-x-8 font-circular text-xs sm:text-sm md:text-lg font-bold">
                        <img className='flex items-center justify-center' width={30} height={50} src="https://user-images.githubusercontent.com/16066404/77041853-a2044100-69e0-11ea-8da6-d64822a2c72a.jpg"  alt="brand logo" />
                        <li className="mx-3 sm:mx-0 on-hover-effect font-semibold italic ">Buy Me A Kofi</li>
                    </ul>
                </nav>
            </div>            
        </header>
    </>
    );
}

export default Navbar;

