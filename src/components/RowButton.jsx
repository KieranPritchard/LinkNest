import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

function RowButton(props){
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
        <button className="bg-[#d7e1ec] rounded-full h-12 w-12">
            <FontAwesomeIcon icon={handleIcon()} />
        </button>
    )
}

export default RowButton