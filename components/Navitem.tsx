"use client"

import{ Link} from "react-scroll"

const navlinks=[
    {name:"Features",
    id :"Features"
    },
    {name:"Pricing",
        id:"Pricing"
    },
    {name:"Enterprise",
        id:"/"
    },
    {name:"Careers",
        id:"/"
    }
]
export default function Navitem()
{
    const handleSetActive = (to:any) => {
        console.log(to);
      };
   return<div className="hidden lg:flex pl-[74px] gap-x-[56px]">
    {
     navlinks.map((item,index)=>( 
         <p  className="font-medium text-[#36485C] cursor-pointer " key={index}><Link 
      
         activeClass="active" 
         
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
         onSetActive={handleSetActive}
       to={`${item.id}`} >{item.name} </Link> </p>
     ))
    }
    </div>
}