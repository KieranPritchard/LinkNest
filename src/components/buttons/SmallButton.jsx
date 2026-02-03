import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faTerminal, faBriefcase, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faSquareLinkedin,  } from '@fortawesome/free-brands-svg-icons';

// Smallbutton component
function SmallButton({icon, link}) {
    // Function to get the icon to be displayed on the button
    const getIcon = () => {
        // switch to select icon based on props
        switch (icon) {
            case "Try Hack Me":
                return faFlag;
            case "Linkedin":
                return faSquareLinkedin;
            case "Github":
                return faGithub;
            case "Hack The Box":
                return faTerminal
            case "Portfolio":
                return faBriefcase
            case "Email":
                return faAt
            default:
                return null;
        }
    };

    //Function to take user to link
    const handleClick = () => {
        // Opens the link in a new tab
        window.open(link)
    } 

    // Returns a button component
    return (
        <button 
            onClick={() => handleClick()} 
            className="bg-[#A9D6E5] hover:bg-[#1B2B41] text-[#1B2B41] hover:text-[#A9D6E5] border-2 border-[#A9D6E5] text-3xl md:text-4xl h-16 w-16 md:h-22 md:w-22 rounded-xl transition-all duration-300 flex items-center justify-center mx-auto"
        >
            {/* Uses the get icon function to display the icon */}
            <FontAwesomeIcon icon={getIcon()} />
        </button>
    );
}

export default SmallButton;