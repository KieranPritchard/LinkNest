import { useState } from "react";
import RowButton from "./RowButton";

function ButtonRow() {
    const [openButton, setOpenButton] = useState(null);

    const handleClick = (id) => {
        setOpenButton((prev) => (prev === id ? null : id));
    };

    const buttons = [
        { id: "phone", icon: "phone", details: "+44 07763 534145" },
        { id: "email", icon: "email", details: "KieranPritchard06@gmail.com" },
        { id: "message", icon: "message", details: "+44 07763 534145" },
    ];

    return (
        <div className="flex flex-row justify-center my-4 gap-4">
            {buttons.map(({ id, icon, details }) => {
                // On mobile: hide other buttons if one is open
                const isHiddenMobile = openButton && openButton !== id;
                return (
                    <div
                        key={id}
                        className={`${isHiddenMobile ? "hidden md:flex" : "flex"}`}
                    >
                        <RowButton
                            icon={icon}
                            details={details}
                            isOpen={openButton === id}
                            onClick={() => handleClick(id)}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default ButtonRow;