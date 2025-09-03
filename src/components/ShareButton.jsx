import { useState } from "react";
import qrCode from "../assets/qr_code.webp"

function ShareButton() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col items-center justify-center bg-[#2a3c4b] dark:bg-[#a9d6e5] 
                text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] 
                hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] w-full rounded-xl border-2 
                text-lg my-2 hover:bg-transparent transition-all duration-300 ease-in-out px-4 
                ${isOpen ? "h-auto" : "h-14"}`}
        >
        <p className={`${isOpen ? "mt-5": "mt-0"}`} >Share with others</p>
        {isOpen && (
            <div id="qrCode" className="pt-5 flex justify-center">
            <img 
                src={qrCode} 
                alt="QR Code"
                className="aspect-square h-auto w-3/4 pb-5" 
            />
            </div>
        )}
        </div>
    );
}

export default ShareButton;
