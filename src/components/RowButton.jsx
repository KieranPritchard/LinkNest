import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function RowButton({ icon }) {
    const [isWide, setIsWide] = useState(false);

    const baseClasses =
        "bg-[#2a3c4b] dark:bg-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] hover:bg-transparent border-2 border-[#2a3c4b] dark:border-[#a9d6e5] rounded-full h-12 flex items-center justify-center transition-all duration-300 overflow-hidden";

    const buttonClass = isWide ? `${baseClasses} w-64 px-4` : `${baseClasses} w-12`;
    const textClass = isWide
        ? "ml-2 max-w-[200px] opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden"
        : "max-w-0 opacity-0 transition-all duration-300 whitespace-nowrap overflow-hidden";

    const handleClick = () => setIsWide((prev) => !prev);

    switch (icon) {
        case "phone":
            return (
                <button onClick={handleClick} className={buttonClass}>
                    <FontAwesomeIcon icon={faPhone} />
                    <span className={textClass}>+44 07763 534145</span>
                </button>
            );
        case "email":
            return (
                <button onClick={handleClick} className={buttonClass}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className={textClass}>KieranPritchard06@gmail.com</span>
                </button>
            );
        case "message":
            return (
                <button onClick={handleClick} className={buttonClass}>
                    <FontAwesomeIcon icon={faMessage} />
                    <span className={textClass}>+44 07763 534145</span>
                </button>
            );
        default:
            return null;
    }
}

export default RowButton;