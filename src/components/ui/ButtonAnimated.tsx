import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight:"400",subsets: ["latin"] });
function ButtonAnimated({
  title,
  className = "",
  primaryColor = "white",
  SecondaryColor = "black",
}: {
  title: string;
  className?: string;
  primaryColor?: string;
  SecondaryColor?: string | "bg-black";
}) {
  return (
    <div
      className={cn(
        className,
        "px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border border-white text-center"
      )}
    >
      <span
        className="absolute w-72 h-0 transition-all
       duration-500 origin-center -translate-x-20 bg-white top-1/2 
       group-hover:h-64 group-hover:-translate-y-32 ease-in-out px-3.5"
      />
      <span
        className={cn(
          "relative text-white tracking-wide transition duration-500 group-hover:text-black ease-in-out",
          oswald.className
        )}
      >
        {title}
      </span>
    </div>
  );
}

export default ButtonAnimated;
