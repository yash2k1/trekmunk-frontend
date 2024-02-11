import VideoComponent from "@/components/VideoComponent";
import VideoLoadingState from "@/components/loadingStates/VideoLoadingState";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import { Button, buttonVariants } from "@/components/ui/button";
import { Search, Menu } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { Suspense } from "react";

const oswald = Oswald({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* herro section */}
      <div>
        <div className="flex flex-col items-center">
          <div className="absolute w-screen flex flex-col gap-y-10 h-[550px] md:h-screen items-center justify-center md:justify-between">
            
            <div className="flex items-center w-full justify-between md:px-10 lg:px-20 px-6">
            
              <Search size={20} className="text-white cursor-pointer"/>
            
              <div className="relative w-64 md:w-72 h-24 cursor-pointer">
                <Image src={"/trekmunkLogo.png"} alt="logo" fill objectFit="contain"/>
              </div>
            
            <Menu size={20} className="text-white cursor-pointer"/>
            
            </div>


            <div className="text-center space-y-2 lg:space-y-6">
            <p className={cn("text-white font-extralight md:text-md tracking-[8px] text-xs")}>27°59'17.0"N 86°55'29.9"E</p>
            <p
              className={cn(
                "text-white text-5xl lg:text-7xl xl:text-[80px] tracking-widest md:tracking-wider",
                oswald.className
              )}
            >
              WELCOME TO 
              HIMALAYAS
              
            </p>
            <div className="flex items-center flex-col justify-center md:flex-row">
              <ButtonAnimated title="FIXED DEPARTURES" className="w-40"/>
              <ButtonAnimated title="ADVENTURES" className="w-40"/>
              <ButtonAnimated title="CONTACT US" className="w-40"/>
            </div>
            </div>


            <div aria-hidden="true" className="opacity-75 flex flex-col justify-between items-center">
              <p className="text-white -rotate-90 mb-6">
                Scroll
              </p>
              <div className="w-[1px] h-8 bg-white"/>
            </div>

          </div>
        </div>
        <Suspense fallback={<VideoLoadingState />}>
          <VideoComponent />
        </Suspense>
      </div>

      {/* mid section */}
      <div className="flex flex-col w-screen overflow-x-hidden">
          <div className="py-6 border border-red-400">
            <p className="text-center lg:text-3xl tracking-wider font-thin">LIVE BY ADVENTURE</p>
            <div className="w-full flex h-[472px] gap-x-2 justify-center">
            <div className="w-96 bg-[url('/backpacking-hover.jpg')] bg-left"></div>
            <div className="w-96 bg-[url('/backpacking-hover.jpg')] bg-center"></div>
            <div className="w-96 bg-[url('/backpacking-hover.jpg')] bg-right"></div>
            </div>
          </div>
      </div>

    </>
  );
}
