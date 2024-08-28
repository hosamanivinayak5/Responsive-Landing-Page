import Image, { StaticImageData } from "next/image";
import feature1 from "../public/assets/feature-1.svg"
import feature2 from "../public/assets/feature-2.svg"
import feature3 from "../public/assets/feature-3.svg"
import  check from "../public/assets/check.svg"
import bluebtn from "../public/assets/blue-button.svg"
import pinkbtn from "../public/assets/pink-button.svg"
import greenbtn from "../public/assets/green-button.svg"
export default function Features () {
  return (
    <div id="Features" className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[18px]">
    <FeatureProp 
     image={feature1}
     title="Sales Monitoring"
     heading="Simplify your sales monitoring"
     description="Stay on top of things and revamp your work process with our game-changing feature. 
     Get a bird's eye view with our customizable dashboard."
     listItems={[
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore"
     ]}
     colour="#0085FF"
     btn={bluebtn}
    />
    <FeatureProp 
     image={feature2}
     title="Customer Support"
     heading="Get in touch with your customers"
     description="Stay on top of things and revamp your work process with our game-changing feature. 
     Get a bird's eye view with our customizable dashboard."
     listItems={[
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore"
     ]}
     reverse={true}
     padding={true}
     colour="#00A424"
     btn={greenbtn}
    /> 
    <FeatureProp 
     image={feature3}
     title="Growth Monitoring"
     heading="Monitor your site’s new subscribers "
     description="Stay on top of things and revamp your work process with our game-changing feature. 
     Get a bird's eye view with our customizable dashboard."
     listItems={[
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore"
     ]}
     colour="#EB2891"
     btn={pinkbtn}
     feature3change={true}
    />
    </div>
  )
}




interface FeatureProps {
  image: StaticImageData;
  title: string;
  heading: string;
  description: string;
  listItems: string[];
  reverse?: boolean;
  padding?: boolean;
  colour: string; // Just the hex code or color value
  btn: StaticImageData;
  feature3change?:boolean
}

function FeatureProp({
  image,
  title,
  heading,
  description,
  listItems,
  reverse,
  padding,
  colour,
  btn,
  feature3change
}: FeatureProps) {
  return (
    <div className={`flex flex-col gap-x-6 ${reverse ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
      <Image src={image} alt={title} className="hidden w-1/2 sm:block" />
      <div className={`sm:w-1/2 lg:py-14 ${padding ? 'lg:pl-14' : 'lg:pr-14'}`}>
        <h3 className={`font-medium lg:text-[18px]`} style={{ color: colour }}>{title}</h3>
        <h1 className="text-[#172026] font-medium pt-[12px] text-2xl lg:text-[42px] lg:leading-[58px]">
          {heading}
        </h1>
        <Image src={image} alt={title} className="pt-6 sm:hidden" />
        <p className="text-[#36485C] py-6 lg:text-[18px]">{description}</p>
        {
          feature3change?<div className="flex w-full gap-x-6  ">
            <div className="flex flex-col w-1/2 gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C]">{listItems[0]}</p>
            </div> 
            <div className="flex flex-col w-1/2 gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[#36485C]">{listItems[1]}</p>
            </div>
          </div> :<ul className="flex flex-col text-[#36485C] gap-y-3 lg:text-[18px]">
          {listItems.map((item, index) => (
            <li key={index} className="flex gap-x-2 items-center">
              <span><Image src={check} alt="tick" /></span>
              {item}
            </li>
          ))}
        </ul>        }
        <p className="flex items-center gap-x-2 pt-6 font-medium lg:text-[18px]" style={{ color: colour }}>
          Learn More <span><Image src={btn} alt="learn more" /></span>
        </p>
      </div>
    </div>
  );
}


