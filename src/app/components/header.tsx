import { Github, Instagram, Mail } from "lucide-react";

export default function Header() {
  return (
    <div>
      <div
        className="flex justify-between items-center 
        bg-base 
        border border-dashed 
        border-r-gray-200 border-t-0 border-l-gray-200 border-b-gray-200 
        w-full h-14 md:h-16 
        p-5"
      >
        <h1
          className="font-geist text-[12px] md:text-[13px] 
          text-blue-600 hover:text-blue-800 
          transition-all duration-200 tracking-tight"
        >
          HMDFZ
        </h1>
        <div className="flex gap-2 md:gap-3">
          <div
            className="p-1 bg-indigo-300 rounded cursor-pointer 
            hover:bg-indigo-400 transition-all duration-200"
          >
            <a href="mailto:hmdfzi15@gmail.com" target="_blank">
              <Mail className="text-gray-50" size={14} />
            </a>
          </div>
          <div
            className="p-1 bg-indigo-300 rounded cursor-pointer 
            hover:bg-indigo-400 transition-all duration-200"
          >
            <a href="https://instagram.com/hmdfzzi" target="_blank">
              <Instagram className="text-gray-50" size={14} />
            </a>
          </div>
          <div
            className="p-1 bg-indigo-300 rounded cursor-pointer 
            hover:bg-indigo-400 transition-all duration-200"
          >
            <a href="https://github.com/mrhmdfz" target="_blank">
              <Github className="text-gray-50" size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
