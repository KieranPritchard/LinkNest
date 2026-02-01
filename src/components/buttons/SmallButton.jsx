import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';

function SmallButton({icon}) {
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
        <button className="bg-[#A9D6E5] hover:bg-[#1B2B41] text-[#1B2B41] hover:text-[#A9D6E5] border-2 border-[#A9D6E5] text-4xl h-22 w-22 rounded-xl transition-all transition-300">
            <FontAwesomeIcon icon={getIcon()} />
        </button>
    );
}

export default SmallButton;