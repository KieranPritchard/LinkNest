import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';

// Smallbutton component
function SmallButton({icon}) {
    // Function to get the icon to be displayed on the button
    const getIcon = () => {
        // switch to select icon based on props
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

    // Returns a button component
    return (
        <button className="bg-[#A9D6E5] hover:bg-[#1B2B41] text-[#1B2B41] hover:text-[#A9D6E5] border-2 border-[#A9D6E5] text-4xl h-22 w-22 rounded-xl transition-all transition-300">
            {/* Uses the get icon function to display the icon */}
            <FontAwesomeIcon icon={getIcon()} />
        </button>
    );
}

export default SmallButton;