function Biography(){
    return(
        /* Match the flex layout and gap of the PersonalBio */
        /* Fixed: Added px-4 for mobile spacing and adjusted gap for smaller screens */
        <div className="flex flex-col justify-start gap-6 lg:gap-10 lg:flex-row px-4 md:px-0">
            
            {/* Spacer: This matches the width of the img (w-64) exactly */}
            {/* Fixed: Changed hidden md:block to lg:block to prevent text squashing on tablets */}
            <div className="w-64 flex-shrink-0 hidden lg:block"></div> 

            {/* Content column */}
            <div className="flex flex-col text-white">
                <h3 className="text-2xl font-bold mb-2">Bio:</h3>
                {/* Fixed: Adjusted text size for mobile and added better color contrast for light mode */}
                <p className="text-base md:text-lg leading-relaxed text-[#1B2B41] dark:text-[#f9fafb]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nisi error nostrum cum, ipsa numquam dolores mollitia eligendi, 
                    quaerat provident excepturi rerum impedit consequatur.
                </p>
            </div>

            {/* Spacer: This matches the width of the img (w-64) exactly */}
            <div className="w-64 flex-shrink-0 hidden lg:block"></div> 

        </div>
    )
}

export default Biography