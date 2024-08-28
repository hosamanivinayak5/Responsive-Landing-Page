import Image from "next/image";
import logo from "../public/assets/Logo.svg"
import User from "../public/assets/User.svg"
import Menu from "../public/assets/Menu.svg"
import Navitem from "./Navitem";

export default function Navbar () {
 return <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
    <div className="flex items-center ">
       <Image src={logo} alt="logo" />
      <Navitem/>
    </div>
    <div className="flex  justify-between gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open your account</p>
        <div className="flex items-center gap-x-3">
            <Image src={User} alt="userlogo" />
            <span className="hidden lg:block font-medium text-[#36485C]">Sign in</span>
        </div>
        
            <Image src={Menu}  alt="menu" className="lg:hidden"/>
        
    </div>
 </nav>
}