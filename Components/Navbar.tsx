"use client"
import {CiSearch} from "react-icons/ci"
import {AiOutlineBell} from  "react-icons/ai"
import {AiOutlineDown} from  "react-icons/ai"
import NavbarDropdown from "@/Components/NavbarDropdown";
import {useState} from "react";
import Image from 'next/image'

export default function  Navbar(){
    const [showDropdown,setShowDropdown] = useState(false)
    const handleDropdown =()=>{
        setShowDropdown(!showDropdown)
    }
    return (
        <div className="container mx-auto py-4  relative  ">
            <div className="flex justify-between items-center">
                <div className="flex items-center  gap-3">
                    <h1 className="cursor-pointer">Logo</h1>
                    <div className="hidden md:block">
                        <div className="flex bg-[#f9f9f9] items-center rounded-2xl px-2 py-1  "  >
                            <CiSearch className="text-black h-6 w-6" />
                            <input placeholder="Search Medium" className="border-0 rounded-2xl text-black focus:outline-0 focus:ring-0 " />
                        </div>
                    </div>

                </div>
                <div className="flex gap-7 items-center">
                    <AiOutlineBell className="w-6 h-6 cursor-pointer"/>
                    <div className="flex items-center gap-1 cursor-pointer" onClick={handleDropdown}>
                        <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="" className="w-8 h-8" />
                        <AiOutlineDown className="w-3 h-3"/>
                    </div>
                </div>
            </div>
            <div  className={ showDropdown? `block absolute  right-0 mt-3 ` : `hidden`}>
                <NavbarDropdown/>
            </div>

        </div>
    );
}