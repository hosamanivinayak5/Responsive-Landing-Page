import Image, { StaticImageData } from "next/image";
import check from "../public/assets/check.svg"
import check1 from "../public/assets/check 1.png"


export default function Pricing()
{
    return <div id="Pricing" className="py-12 lg:py-[60px]">
            <h1 className="font-medium text-[24px] leading-9 text-center text-[#172026] lg:text-[42px] lg:leading-[58px]">Flexible plans for you</h1>
            <p className="text-[#36485C] text-[16px] leading-6 text-center pt-4 pb-[14px] lg:text-[18px] lg:leading-7">No hidden fees!</p>
        
       <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6">
        <Price
           heading="Free Trial"
           title="Perfect for testing the waters"
           amount="$0"
           listitem={[
            "Lorem ipsum dolor sit amet",
            "Sed do eiusmod tempor incididunt",
            "Consectetur adipiscing elit"
           ]}
           bgcolour="#F5F4FF"
           btntext="Start Trial"
           headingcolour="#4328EB"
           amountcolour="#172026"
           amountmonthcolour="#5F7896"
           titlecolour="#36485C"
           checksrc={check}
           />
           <Price
           heading="Business"
           title="Perfect for small businesses"
           amount="$500"
           amountcolour="#FFFFFF"
           listitem={[
            "Lorem ipsum dolor sit amet",
            "Sed do eiusmod tempor incididunt",
            "Consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet",
            "Consectetur adipiscing elit"
           ]}
           bgcolour="#4328EB"
           btntext="Get Started"
           headingcolour='#FFFFFF'
           listitemcolour="#F4F8FA"
           amountmonthcolour="#F4F8FA"
          checksrc={check1}
          titlecolour="#F4F8FA"
           />
          <Price
           heading="Enterprise"
           title="Perfect for big companies"
           amount="Custom"
           amountcolour="#172026"
           listitem={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ",
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
           ]}
           bgcolour="#F5F4FF"
           btntext="Contact Us"
           invisible={true}
           headingcolour="#4328EB"
           checksrc={check}
           titlecolour="#36485C"
           />
         </div>
       </div>
    
}
interface PlanProp{
heading:string,
title:string,
amount:string,
listitem:string[],
invisible?:boolean,
bgcolour:string,
btntext:string,
headingcolour:string,
listitemcolour?:string,
amountcolour:string,
amountmonthcolour?:string,
checksrc:StaticImageData,
titlecolour:string
}
function Price({heading,title,amount,listitem,invisible,bgcolour,btntext,headingcolour,titlecolour,listitemcolour,amountcolour,amountmonthcolour,checksrc}:PlanProp){
    return  <div className={`w-full rounded-lg  p-6 flex flex-col  lg:justify-between`} style={{backgroundColor:bgcolour}}>
    <div>
    <h3 className="font-medium  text-lg lg:text-xl lg:leading-[26px]" style={{color:headingcolour}}>{heading}</h3>
    <p className={`pt-3 lg:text-[18px]  lg:leading-7`} style={{color:titlecolour}} >{title}</p>
    <h2 className="font-medium pt-4 text-2xl leading-9 lg:text-[32px] lg:leading-10" style={{color:amountcolour}}>{amount} <span className={invisible?'hidden':'' } style={{color:amountmonthcolour}}>/mo</span> </h2>
    <div className="flex flex-col gap-y-2 pt-4 ">
      {
        listitem.map((item,index)=>(
            <div key={index}  className="flex gap-x-2 items-center">
            <Image src={checksrc} alt="" className={invisible?'hidden':'' } />
            <p style={{color:listitemcolour}} >{item}</p>
            </div>
        ))
      }
       
    </div>
</div>
<button className="text-[#4328EB] mt-4 rounded-[4px] bg-[#FFFF] text-center py-[14px] font-medium "> {btntext} </button>

</div>
}