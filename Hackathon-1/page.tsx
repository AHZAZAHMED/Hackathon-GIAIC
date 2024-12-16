import Image from "next/image";
import UpperHeader  from "./components/UpperHeader";
import LowerHeader from "./components/LowerHeader";
import Hero from "./components/Hero";
import article1 from "@/app/assets/article1.png"
import article2 from "@/app/assets/article2.png"
import Card from "./components/Card";
import rightArrow from "@/app/assets/right-arrow.png"
import leftArrow from "@/app/assets/left-arrow-key.png"
import Hero2 from "./components/Hero2";

export default function Home() {
  const Shoes = [
    {
      ArticleImage : article1.src,
      ArticleName : "Nike Air Max Pulse",
      ArticleCategory : "Women's Shoes",
      ArticlePurpose : "",
      ArticlePrice : "₹ 13 995",
      id : '1'
  },
{
  ArticleImage : article1.src,
  ArticleName : "Nike Air Max Pulse",
  ArticleCategory : "Men's Shoes",
  ArticlePurpose : "",
  ArticlePrice : "₹ 13 995",
  id : '2'
},
{
  ArticleImage : article2.src,
  ArticleName : "Nike Air Max 97 SE",
  ArticleCategory : "Men's Shoes",
  ArticlePurpose : "",
  ArticlePrice : "₹ 16 995",
  id : '3'
}
]

const mens =[
  {
    ArticleImage : article1.src,
    ArticleName : "Nike Dri-FIT ADV TechKnit Ultra",
    ArticleCategory : "Men's Short-Sleeve",
    ArticlePurpose : "Running Top",
    ArticlePrice : "₹ 3 895",
    id : '1'
  },
  {
    ArticleImage : article1.src,
    ArticleName : "Nike Dri-FIT Challenger",
    ArticleCategory : "Men's 18cm (approx.) 2-",
    ArticlePurpose : "in-1 Versatile Shorts",
    ArticlePrice : "₹ 2 495",
    id : '2'
  }
]
const women =[
  {
    ArticleImage : article1.src,
    ArticleName : "Nike Dri-FIT ADV Run Division",
    ArticleCategory : "Women's Long-Sleeve",
    ArticlePurpose : "Running Top",
    ArticlePrice : "₹ 5 895",
    id : '1'
  },
  {
    ArticleImage : article1.src,
    ArticleName : "Nike Fast",
    ArticleCategory : "Women's Mid-Rise 7/8 Runing",
    ArticlePurpose : "Leggings with pockets",
    ArticlePrice : "₹ 3 795",
    id : '2'
  }
]
  return (
    <div>
    <div className="flex flex-col items-center py-2 bg-[#F5F5F5]">
      <span className="font-medium text-[15px] leading-4">Hello Nike App</span>
      <div className="text-[11px] leading-6">
      <span className="font-normal ">Download the app to access everything Nike.</span>
      <span className="font-medium decoration-solid underline">Get Your Great</span>
      </div>
    </div>

    {/* Hero_section */}
    <Hero />

    {/* main-section */}
    <div className="px-8">
           {/* top-section */}
      <div className="flex justify-between mobile:flex-col lg_mobile:flex-row ">
        <span>Best of Air Max</span>
        <div className="space-x-2 pb-1">
        <span>Shop</span>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full p-4">
          <Image width={15} src={leftArrow} alt="navigation key"></Image>
        </button>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full p-4">
          <Image width={15} src={rightArrow} alt="navigation key"></Image>
        </button>
        </div>
      </div>
          {/* Card-section */}
    <div className="mobile:px-4  grid place-items-center medium:grid-cols-2 md:grid-cols-3 gap-4">
    {
      Shoes.map((elem)=>{
        return <Card key={elem.id} ArticleImage={elem.ArticleImage} ArticleName={elem.ArticleName} ArticleCategory={elem.ArticleCategory} ArticlePurpose={elem.ArticlePurpose} ArticlePrice={elem.ArticlePrice} id={elem.id} />
      })
    }
    </div>
    </div>

    {/* Hero2 */}

    <Hero2 />

    {/* second card section */}

    <div className="px-4 mobile:flex mobile:flex-col mobile:items-center medium:items-start">
      <h2 className="mobile:pt-4 px-4 font-medium text-[21px] leading-7 text-[#111111]">Gear Up</h2>
      <div className="flex px-8 mobile:flex-col laptop:flex-row">
      {/* left cards */}
      <div className="px-4 flex mobile:flex-col  mobile:items-center medium:items-end ">
      <div className="space-x-2 justify-end  flex mobile:items-center  mb-2 pt-4">
        <span className="">Shop Men's</span>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full mobile:p-3 p-4 ">
          <Image width={15} src={leftArrow} alt="navigation key"></Image>
        </button>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full mobile:p-3 p-4">
          <Image width={15} src={rightArrow} alt="navigation key"></Image>
        </button>
        </div>

        <div className="grid mobile:grid-cols-1  medium:grid-cols-2 gap-4">
          {
            mens.map((elem)=>{
              return  <Card key={elem.id} ArticleName={elem.ArticleName} ArticleImage={elem.ArticleImage} ArticleCategory={elem.ArticleCategory} ArticlePurpose={elem.ArticlePurpose} ArticlePrice={elem.ArticlePrice} />
          
            })
          }
        </div>
      
      </div>
      {/* Right Cards */}
      <div className="px-4 flex mobile:flex-col  mobile:items-center medium:items-end">
      <div className="space-x-2 justify-end  flex mobile:items-center pt-3">
        <span>Shop Women's</span>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full p-4">
          <Image width={15} src={leftArrow} alt="navigation key"></Image>
        </button>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full p-4">
          <Image width={15} src={rightArrow} alt="navigation key"></Image>
        </button>
        </div>

        <div className="grid mobile:grid-cols-1  medium:grid-cols-2 gap-4 pt-1">
          {
            women.map((elem)=>{
              return  <Card key={elem.id} ArticleName={elem.ArticleName} ArticleImage={elem.ArticleImage} ArticleCategory={elem.ArticleCategory} ArticlePurpose={elem.ArticlePurpose} ArticlePrice={elem.ArticlePrice} />
          
            })
          }
        </div>
      
      </div>
      </div>
      </div>
    </div>
  
  );
}
