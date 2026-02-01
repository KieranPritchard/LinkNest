import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Long Button Component
function LongButton({text, link, icon}){
    // Function to handle link
    const handleLink = (link) => {
        window.open(link)
    }

    // Function to handle icon
    const handleIcon = () => {
        if (icon === "linkedin") return faLinkedin;
        if (icon === "github") return faGithub;
        return faGlobe;
    }

    return(
        <button
            className="relative flex items-center justify-between bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] w-full rounded-xl border-2 text-lg hover:bg-transparent transition-colors duration-300 ease-in-out px-4 mt-2 h-22"
            onClick={() => handleLink(link)}
        >
            {/* Icon */}
            <FontAwesomeIcon icon={handleIcon()} />

            {/* Text centered using Flexbox logic instead of Absolute for better stability */}
            <span className="absolute left-1/2 -translate-x-1/2 w-max">
                {text}
            </span>

            {/* Empty span to maintain 'justify-between' symmetry if needed */}
            <span className="w-4"></span>
        </button>
    )
}

export default LongButton