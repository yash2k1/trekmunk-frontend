'use client'
import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";
import { Provider } from "../../redux/Provider";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react";
import AdminNavbar from '@/components/shared/admin/AdminNavbar';
import AdminMenu from "@/components/shared/admin/AdminMenu";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        < div className="min-h-[100svh]" >
            <div className="flex-grow flex-1 ">
                {/* <div className="flex-grow flex-1"  style={{ height: `calc(100svh - 62px)` }}> */}
                {/* <nav className="sticky top-0 bg-black w-full h-[62px]" > navbar</nav> */}

                {/* for mobile view */}

                <div className='block sm:hidden'>
                    <Drawer direction='left' >
                        <AdminNavbar />
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>
                                    <DrawerClose className="flex items-center">
                                        <X />
                                        <Image
                                            src={"https://trekmunk.b-cdn.net/trekmunk-logo-black.png"}
                                            className="object-contain"
                                            alt={"logo"}
                                            height={"60"}
                                            width={"150"}
                                        />
                                    </DrawerClose></DrawerTitle>
                            </DrawerHeader>


                            <div style={{ height: `calc(100svh - 62px)` }}>
                                <ScrollArea className="flex-1 h-full border-s-stone-300 w-[100%] rounded-md border p-4 text-lg">
                                    <AdminMenu />
                                </ScrollArea>
                            </div>

                        </DrawerContent>
                    </Drawer>
                    <Provider>
                        {children}
                    </Provider>
                </div>
                {/* for deskstop view */}
                <div className='hidden sm:block'>
                    <Drawer>
                        <AdminNavbar />
                    <div className='flex ' style={{ height: `calc(100svh - 62px)` }}>
                        <ScrollArea className="flex-1 border-s-stone-300 w-[20%] max-w-[250px] min-w-[250px] rounded-md border p-4 text-lg">
                            <AdminMenu />
                        </ScrollArea>

                        <Provider>
                            {children}
                        </Provider>
                    </div>
                    </Drawer>

                </div>


            </div>
        </div>
    );
}
