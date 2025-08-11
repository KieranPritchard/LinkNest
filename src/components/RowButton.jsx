import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Toast from '../components/Toast'; // make sure this exists

function RowButton({ contact, Icon }) {
    const [toast, setToast] = useState(null);

    const showToast = () => {
        setToast(`${contact} was added to your clipboard`);
    };

    const handleClick = (text) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard!');
            showToast();
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    const handleIcon = () => {
        switch (Icon) {
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
        <>
        <button
            onClick={() => handleClick(contact)}
            className="bg-[#d7e1ec] hover:text-[#d7e1ec] hover:bg-transparent border-2 border-[#d7e1ec] rounded-full h-12 w-12 flex items-center justify-center"
        >
            <FontAwesomeIcon icon={handleIcon()} />
        </button>
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        </>
    );
}

export default RowButton;