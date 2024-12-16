import Image from 'next/image'
import React from 'react'
import homeImage from "@/app/assets/homeImage.jpeg"

const Hero2 = () => {
  return (
    <div className='px-8'>
        <h3 className='font-medium text-[21px] leading-7 text-[#111111] py-4'>Featured</h3>
        {/* Image-section */}
        <Image src={homeImage} alt='home image'/>
        {/* Lower-Section */}
        <div className='text-[#0a0707] flex flex-col items-center mobile:space-y-4 lg_mobile:space-y-1 medium:space-y-2 space-y-3 py-4 '>
            <h3 className='font-medium mobile:text-[18px] lg_mobile:text-[23px] medium:text-[30px]  sm:text-[37px] laptop:text-[45px] lg:text-[54px] xl:text-[54px]  '>STEP INTO WHAT FEELS GOOD</h3>
            <p className='font-normal mobile:text-[8px] lg_mobile:text-[11px] medium:text-[13px] laptop-[15px] leading-6 text-center'>Cause everyone should know the feeling of running in that perfect pair.</p>
            <div className='text-white mobile:text-[10px] lg_mobile:text-[12px] medium:text-[15px] leading-6 space-x-2'>
                <button className='bg-[#111111] rounded-full px-4 py-1 hover:bg-white hover:text-[#111111]'>
                    <p className=''>Find Your Shoe</p>
                </button>
            </div>
        </div>
    </div>

  )
}

export default Hero2