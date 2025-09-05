import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';

function RowButton({ icon, details, isOpen, onClick }) {
    const handleOpenSize = (text) => {
        return text.length > 25 ? "w-72" : "w-64";
    };

    const handleMaxWidth = (text) => {
        return text.length > 25 ? "max-w-[225px]" : "max-w-[200px]";
    };

    const baseClasses =
        "bg-[#2a3c4b] dark:bg-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] hover:bg-transparent border-2 border-[#2a3c4b] dark:border-[#a9d6e5] rounded-full h-12 flex items-center justify-center transition-all duration-300 overflow-hidden";
    const buttonClass = isOpen
        ? `${baseClasses} ${handleOpenSize(details)} px-4`
        : `${baseClasses} w-12`;
    const textClass = isOpen
        ? `ml-2 ${handleMaxWidth(details)} opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden`
        : `max-w-0 opacity-0 transition-all duration-300 whitespace-nowrap overflow-hidden`;

    const getIcon = () => {
        switch (icon) {
            case "phone":
                return faPhone;
            case "email":
                return faEnvelope;
            case "message":
                return faMessage;
            default:
                return null;
        }
    };

    return (
        <button onClick={onClick} className={buttonClass}>
            <FontAwesomeIcon icon={getIcon()} />
            <span className={textClass}>{details}</span>
        </button>
    );
}

export default RowButton;