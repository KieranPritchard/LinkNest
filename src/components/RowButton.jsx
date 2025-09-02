import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function RowButton({ contact, Icon }) {
    const [isWide, setIsWide] = useState(false)

    const handleClick = () => {
        if(isWide){
            setIsWide(false)
        } else{
            setIsWide(true)
        }
    };

    const handleButton = () => {
        const baseClasses = "bg-[#d7e1ec] hover:text-[#d7e1ec] hover:bg-transparent border-2 border-[#d7e1ec] rounded-full h-12 flex items-center justify-center transition-colors duration-300 ease-in-out";

        const buttonClass = isWide ? `${baseClasses} px-4` : `${baseClasses} w-12`;
        const textClass = isWide ? "ml-2 inline" : "hidden";

        switch (Icon) {
            case "phone":
                return (
                    <button onClick={() => handleClick()} className={buttonClass}>
                        <FontAwesomeIcon icon={faPhone} />
                        <p className={textClass}>+44 07763 534145</p>
                    </button>
                );
            case "email":
                return (
                    <button onClick={() => handleClick()} className={buttonClass}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className={textClass}>KieranPritchard06@gmail.com</p>
                    </button>
                );
            case "message":
                return (
                    <button onClick={() => handleClick()} className={buttonClass}>
                        <FontAwesomeIcon icon={faMessage} />
                        <p className={textClass}>+44 07763 534145</p>
                    </button>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {handleButton()}
        </>
    );
}

export default RowButton;