import Image from 'next/image'
import React from 'react'

interface ICardProps {
    ArticleImage : string,
    ArticleName : string,
    ArticleCategory : string,
    ArticlePurpose? : string,
    ArticlePrice : string
}
const Card = (Props:ICardProps) => {

    const { ArticleImage ,ArticleName ,ArticleCategory , ArticlePurpose = " " , ArticlePrice , id } = Props ;

  return (
    <div className='flex flex-col '>
        {/* article-pic-secction */}
        <Image width={330.36} height={300.36} src={ArticleImage} alt='ArticleImage' className='bg-[#F3F3F3] hover:bg-[#f3f3f3ce] medium:w-[240px] sm:w-[270px] md:w-[220px] laptop:w-[250px] lg:w-[310.36px] xlg:w-[340.36px] xl:w-[360px]'></Image>

        {/* Article Name & price secction */}
        <div className='flex pt-3 pb-12 justify-between'>
           {/* Article Name section */}
            <div className='flex flex-col  space-y-1 mobile:leading-3 xlg:leading-6 '>
                <span className='mobile:text-[11px] lg_mobile:text-[14px] medium:text-[10px] laptop:text-[8px] lg_laptop:text-[9px] lg:text-[11px] xlg:text-[14px] font-medium  text-[#111111] '>{ArticleName}</span>
                <div className='space-y-1 mobile:text-[11px] lg_mobile:text-[13px] medium:text-[9px] lg:text-[10px] font-normal xlg:text-[13px]  text-[#757575] flex flex-col'>
                <span >{ArticleCategory}</span>
                <span >{ArticlePurpose}</span>
                </div>
            </div>
            {/* Article price secction  */}
            <div className='flex justify-end'>
                <span className='font-medium mobile:text-[11px] lg_mobile:text-[13px] medium:text-[11px] xlg:text-[13px] text-[15px] leading-6 justify-end flex'>{ArticlePrice}</span>
            </div>
        </div>

    </div>
  )
}

export default Card