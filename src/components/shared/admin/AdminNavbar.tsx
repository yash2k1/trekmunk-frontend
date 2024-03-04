import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {  MenuIcon, UserRound, Power} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import Image from 'next/image';
import {
    DrawerTrigger,
} from "@/components/ui/drawer"
const AdminNavbar = () => {
  return (
    <nav className="sticky top-0 w-full h-[62px] flex items-center justify-between px-[10px] shadow-md sm:px-[20px]" >
    {/* nav left side elements */}
    <div className='flex items-center'>
        <DrawerTrigger className='block sm:hidden'> <MenuIcon /></DrawerTrigger>

        <Image 
  src={"https://trekmunk.b-cdn.net/trekmunk-logo-black.png"}
  className="object-contain sm:w-[150px]"
  alt={"logo"}
  height={"40"} 
  width={"100"}
/>
    </div>
    {/* nav right side elements */}
    <div className='flex items-center'>
        <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Select >
            <SelectTrigger className="w-[100px] h-8 mx-1">
                <SelectValue placeholder="sanskar sahab" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="system"><div className='flex items-center'><UserRound/> <p>Edit Profile</p></div></SelectItem>
                <SelectItem value="system"><div className='flex items-center'><Power/> <p>Logout</p></div></SelectItem>
            </SelectContent>
        </Select>
    </div>
</nav>
  )
}

export default AdminNavbar