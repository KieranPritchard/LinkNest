import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';

function SmallButton({ icon, details}) {

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

export default SmallButton;