import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projectitem = ({title,backgroundImg,property}) => {
  return (
    

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl
                                 rounded-xl  group  hover:scale-105 mt-4 ease-in duration-150'>

                        <Image  className='rounded-xl group-hover:opacity-80' src={backgroundImg} alt='/' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-[#5651e5] tracking-wider text-center'>{title}</h3>
                            <p className='pb-4 t-2 text-white text-center'>Placeholder</p>
                            <Link href = '/'>
                              <p>Click Test</p>
                            </Link>
                        </div>
                </div>
  )
}

export default Projectitem