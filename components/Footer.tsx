import Image from "next/image";
import logo from "../public/assets/Logo.svg"
import Facebook from "../public/assets/Facebook.svg"
import X from "../public/assets/X.svg"
import feed from "../public/assets/Feed.svg"
const lisitems=[
    "Features",
    "Pricing",
    "Enterprise",
    "Careers"
]
const logos=[
  Facebook,
  X,
  feed
]
export default function Footer()
{
    return <div className="pt-[80px] pb-[40px]">
       <div className="flex  items-center justify-center gap-x-3">
        <Image  src={logo} alt="" />
        <p className="font-bold text-[#36485C] text-[17px] ">Vinayak H</p>
       </div>
       <div className="flex lg:flex-row items-center text-center flex-col gap-y-8 pt-14 text-[#36485C] sm:justify-center sm:gap-x-5 sm:flex-row sm:pt-5">
        {
            lisitems.map((item,index)=>(
                
                    <p key={index} >{item}</p>
             
            ))
        }
       </div>
       
        <p className="font-medium text-center text-[14px] pt-14 leading-[22px] text-[#5F7896] sm:pt-5">© Copyright 2024. Your Site. All rights reserved.</p>
        <div className="flex gap-x-14 items-center justify-center pt-10">
          {
            logos.map((item,index)=>(
                <Image key={index} src={item} alt="some text"  />
            ))
          }
        </div>
       
    </div>
}