import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>The Integrated Health Equity Platform (IHEP) is a digital solution designed to reduce healthcare disparities in underserved communities. It features geospatial health mapping, cost-effective telemedicine, and mobile health clinics, offering data-driven insights to improve healthcare accessibility and quality. By empowering local governments and organizations, IHEP promotes ethical practices and supports policy recommendations for better health outcomes.</p>
        </div>


        <div>
            <p className='text-xl font-medium mb-5'>Contributors</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Dammu Varshitha</li>
                <li>Shiva shlok</li>
                <li>Chikkala Keerthi</li>
            </ul>
        </div>


        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 9480304679</li>
                <li>shivashlok2004@gmail.com</li>
            </ul>
        </div>

      </div>


      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Team Battle 2024 - Leap Ideathon.</p>
      </div>
    </div>
  )
}

export default Footer
