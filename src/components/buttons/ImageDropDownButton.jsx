import { useState } from "react";

// Button which features a image drop down
function ImageDropDownButton({text, image, altText}) {
    // State to tract wheter the button is open or not
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle clice and set the drop down as open or closed
    const handleClick = () => setIsOpen(prev => !prev);

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col items-center justify-center bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] w-full rounded-xl border-2 text-lg my-2 hover:bg-transparent transition-all duration-300 ease-in-out px-4 ${isOpen ? "py-5" : "h-14"} `}
        >
        {/* uses text props */}
        <p className="transition-all duration-300 ease-in-out">{text}</p>

            {/* Image container */}
            <div
                className={`
                w-full overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-[500px] opacity-100 pt-5" : "max-h-0 opacity-0 pt-0"}
                `}
            >
                {/* Displays the image inside a flex comtainer */}
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt={altText}
                        className="aspect-square h-75 sm:h-95 pb-5 transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
}

export default ImageDropDownButton;
