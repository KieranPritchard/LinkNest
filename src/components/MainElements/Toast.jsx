import React, { useEffect } from "react";

function Toast({ message, duration = 3000, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="fixed top-5 right-5 bg-[#1b2b41] border-[#a9d6e5] text-[#f9fafb] py-2.5 px-5 rounded-md shadow-[1px_1px_7px_2.5px] shadow-[#a9d6e5]">
        {message}
        </div>
    );
}

export default Toast;