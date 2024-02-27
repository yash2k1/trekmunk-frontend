import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: "400", subsets: ["latin"] });
function ButtonAnimated({
  title,
  className = "",
  type = "primary",
}: {
  title: string;
  className?: string;
  type?: "primary" | "secondary" | "ghostedWhiteOswald";
}) {
  return (
    <div
      className={cn(
        "px-3.5 py-2 overflow-hidden relative group/buttonAnimated cursor-pointer border text-center",
        className,
        type == "ghostedWhiteOswald" && "border-white",
        type == "primary" && "border-black bg-white"
      )}
    >
      <span
        className={cn(
          "absolute w-[1000px] h-0 transition-all duration-500 origin-center -translate-x-20 top-1/2 group-hover/buttonAnimated:h-64 group-hover/buttonAnimated:-translate-y-32 ease-in-out px-3.5",
          type == "ghostedWhiteOswald" && "bg-white",
          type == "primary" && "bg-black"
        )}
      />
      <span
        className={cn(
          "relative text-white tracking-wide transition duration-500 group-hover/buttonAnimated:text-black ease-in-out",
          type == "ghostedWhiteOswald" && cn("text-white group-hover/buttonAnimated:text-black",oswald.className),
          type == "primary" && "text-black group-hover/buttonAnimated:text-white"
        )}
      >
        {title}
      </span>
    </div>
  );
}

export default ButtonAnimated;
