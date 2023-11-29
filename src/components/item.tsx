import { ReactNode } from "react";

export default function Item({className, icon}: {className: string, icon: ReactNode}) {
    if(window.innerWidth < 1700) return

  return <div className={"bg-[#2D2F4A] absolute h-20 w-20 rounded-xl shadow-lg flex items-center justify-center text-white " + className}>{icon}</div>;
}
