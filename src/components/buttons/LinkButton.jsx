import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LinkButton(props){
    const handleLink = (link) => {
        window.open(link)
    }

    const handleIcon = () => {
        const website = props.buttonName.toLowerCase();

        if (website === "linkedin") {
            return faLinkedin;
        } else if (website === "github") {
            return faGithub;
        } else {
            return faGlobe;
        }
    }


    return(
        <button
            className="relative flex items-center justify-between bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] h-14 w-full rounded-xl border-2 text-lg my-2 hover:bg-transparent transition-colors duration-300 ease-in-out px-4"
            onClick={() => handleLink(props.buttonLink)}
        >
            {/* Icon on the far left */}
            <span>
                <FontAwesomeIcon icon={handleIcon()} />
            </span>

            {/* Text centered */}
            <span className="absolute left-1/2 transform -translate-x-1/2">
                {props.buttonName}
            </span>
        </button>
    )
}

export default LinkButton