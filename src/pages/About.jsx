import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='font-medium text-gray-700'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to the Integrated Health Equity Platform (IHEP), your ally in promoting health equity and improving healthcare access for all individuals, regardless of their socioeconomic background. At IHEP, we recognize the critical role that social determinants play in shaping health outcomes and the disparities that arise from them.</p>
          <p>Our commitment is to leverage technology to create a comprehensive solution that bridges the gaps in healthcare access and promotes ethical practices within underserved communities. By combining geospatial health mapping, telemedicine, mobile health services, and personalized health monitoring, we aim to empower individuals and provide them with the resources they need to lead healthier lives.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At IHEP, our vision is to transform the healthcare landscape by ensuring equal opportunities for health and well-being for every individual. We aspire to create a world where social and economic barriers no longer dictate health outcomes. Our goal is to leverage innovative technology to deliver essential healthcare services, foster healthier environments, and promote education on preventive health measures.</p>
          <p>We believe that everyone, regardless of where they live or their income level, deserves access to high-quality healthcare. By addressing the root causes of health disparities, we aim to enable individuals in underserved areas to have the same opportunities for health and wellness as those in more affluent neighborhoods. Together, we can build a healthier future for all, reducing inequalities and ensuring that every person has an equal chance to thrive.</p>
        
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
          <b>EQUITY:</b>
          <p>We ensure equal access to healthcare for all, regardless of socioeconomic status.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
          <b>INNOVATION:</b>
          <p>We utilize cutting-edge technology to meet the unique needs of underserved communities.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
          <b>ACCESSIBILITY:</b>
          <p>Our telehealth services and mobile clinics bring quality care directly to you.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
          <b>COMMUNITY FOCUS:</b>
          <p>We empower local communities for sustainable health improvements.</p>
        </div>
      </div>

    </div>
  )
}

export default About
