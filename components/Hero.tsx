import Image from "next/image";
import bluearrow from "../public/assets/blue-button.svg"
import gradient from "../public/assets/Gradient.svg"
import HeroImage from "../public/assets/Image.svg"
import google from "../public/assets/Google.svg"
import cnn from "../public/assets/CNN.svg"
import slack from "../public/assets/Slack.svg"
import trustpilot from "../public/assets/Trustpilot.svg"
import cluth from "../public/assets/Clutch.svg"
export default function Hero()
{
    return(
        <div className="pt-[16px]  lg:pt-11">
            <div className="px-[20px] lg:px-[280px]">
           <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
           Start monitoring your website like a pro
           </h1>
           <p className="pt-6  lg:text-[18px] lg:leading-7 text-center text-[#36485C]">
           Get a bird's eye view with our customizable dashboard. Stay on top of things!
            Revamp your work process with our game-changing feature. 
           Boost productivity and efficiency!
           </p>
           <div className="flex w-full pt-8 justify-center gap-x-6">
           <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">Try for free</button>
           <button className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 lg:w-fit">View Pricing <span> <Image src={bluearrow} alt=""/> </span></button>
           </div>
            </div>
            <div className=" relative flex h-full w-full justify-center">
                <Image src={gradient} alt=""  className="min-h-[500px] w-full object-cover"/>
                <div className=" absolute bottom-5 flex w-full flex-col items-center">
              <Image src={HeroImage} alt="" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"/> 
              <div className="flex w-full items-center flex-col lg:container lg:flex-row lg:justify-between lg:px-20 ">
               <p className="text-[#FFFF] text-center lg:text-[18px]">Trusted by these companies</p>
               <div className="grid grid-cols-3 items-center justify-center justify-items-center px-5 align-middle lg:grid-cols-5 ">
                <Image src={google} alt="googlelogo" />
                <Image src={slack} alt="slacklogo" />
                <Image  src={trustpilot} alt="trustpilotlogo"  />
                <Image  src={cnn} alt="cnn logo"  />
                <Image  src={cluth} alt="clutch logo"  />
               </div>
              </div>
                </div>
            </div>
        </div>
    )
}