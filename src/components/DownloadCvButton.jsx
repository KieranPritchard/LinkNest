import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cv from '../assets/Kieran_Pritchard_C.V.pdf'

function DownloadCvButton(){
    return(
        <a
            style={{ fontFamily: '"Source Code Pro", monospace', fontWeight: 400 }}
            className="relative flex items-center justify-between bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] h-14 w-full rounded-xl border-2 text-lg my-2 hover:bg-transparent transition-colors duration-300 ease-in-out px-4"
            href={Cv}
            download={"Kieran_Pritchard_C.V.pdf"}
        >
            {/* Icon on the far left */}
            <span>
                <FontAwesomeIcon icon={faFile} />
            </span>

            {/* Text centered */}
            <span className="absolute left-1/2 transform -translate-x-1/2">
                Download My C.V
            </span>
        </a>
    )
}

export default DownloadCvButton