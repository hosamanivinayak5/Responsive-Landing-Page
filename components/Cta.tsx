import Image from "next/image";
import arrow from "../public/assets/arrow.png"
export default function Cta()
{
    return <div className="w-full rounded-[16px] py-14 px-8 lg:my-[60px] lg:px-[324px] lg:py-[89px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
     <h1 className="text-center text-white text-[32px] font-medium lg:text-[56px] lg:leading-[64px]">Monitor your website like a pro</h1>
     <p className="text-white text-center pt-6 lg:text-[18px] lg:leading-7 lg:pt-12">Join over 800+ happy site owners boosting productivity and efficiency!</p>
     
     <div className="mt-10 flex flex-col w-full items-center lg:flex-row lg:mt-14 lg:justify-center gap-x-10">
     <button className="py-4 px-8 bg-white rounded text-pink-500 w-fit font-medium ">Try for free</button>
    <button className="flex justify-center  lg:w-fit lg:mt-0 items-center w-full font-medium text-[18px]  text-white gap-x-3 mt-8">
    Contact Sales
    <span><Image src={arrow} alt=""/> </span>
    </button>
     </div>
    </div>
}