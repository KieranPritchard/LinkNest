import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Function to allow users to download a file
function DownloadButton({file, fileName, text}){
    // Returns a download link using the props
    return(
        <a
            className="relative flex items-center justify-between bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] min-h-[70px] md:h-22 w-full rounded-xl text-lg md:text-xl border-2 my-2 hover:bg-transparent transition-colors duration-300 ease-in-out px-4"
            href={file}
            download={fileName}
        >
            {/* Icon on the far left */}
            <span className='text-3xl md:text-4xl'>
                <FontAwesomeIcon icon={faDownload} />
            </span>

            {/* Text centered */}
            {/* Added max-width and text-center to handle long file names on mobile */}
            <span className="text-body absolute left-1/2 transform -translate-x-1/2 w-max max-w-[65%] text-center leading-tight">
                {text}
            </span>

            {/* Empty span to maintain 'justify-between' symmetry */}
            <span className="w-8"></span>
        </a>
    )
}

export default DownloadButton