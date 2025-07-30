import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logofooter' className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            dotienluong1402@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>2025 Developed by Do Tien Luong</p>
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
            <li><a target='_blank' href="linkgithub">Github</a></li>
            <li><a target='_blank' href="linkgithub">Linkedln</a></li>
            <li><a target='_blank' href="linkgithub">Facebook</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
