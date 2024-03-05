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
import { useRouter } from 'next/navigation';
const AdminNavbar = () => {
    const router=useRouter();
  return (
    <nav className="bg-white sticky z-[9999] top-0 w-full h-[62px] flex items-center justify-between px-[10px] shadow-md sm:px-[20px]" >
    {/* nav left side elements */}
    <div className='flex items-center'>
        <DrawerTrigger className='block sm:hidden'> <MenuIcon /></DrawerTrigger>

        <Image 
  src={"https://trekmunk.b-cdn.net/trekmunk-logo-black.png"}
  className="object-contain sm:w-[150px] cursor-pointer"
  alt={"logo"}
  height={"40"} 
  width={"100"}
   onClick={()=>router.push("/admin")}
/>
    </div>
    {/* nav right side elements */}
    <div className='flex items-center justify-end'>
        <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Select >
            <SelectTrigger className="w-[70px] sm:w-[130px] h-8 mx-1">
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