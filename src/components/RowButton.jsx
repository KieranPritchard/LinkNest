import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

function RowButton(props){
    const handleClick = (text) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    const handleIcon = () => {
        switch (props.Icon) {
            case "phone":
                return faPhone 
                break;
            case "email":
                return faEnvelope
                break
            case "message":
                return faMessage
                break
            default:
                break;
        }
    }
    
    return(
        <button onClick={() => handleClick(props.contact)} className="bg-[#d7e1ec] hover:text-[#d7e1ec] hover:bg-transparent border-2 border-[#d7e1ec] rounded-full h-12 w-12">
            <FontAwesomeIcon icon={handleIcon()} />
        </button>
    )
}

export default RowButton