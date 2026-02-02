function Biography(){
    return(
        /* Match the flex layout and gap of the PersonalBio */
        <div className="flex flex-col justify-start gap-10 md:flex-row">
            
            {/* Spacer: This matches the width of the img (w-64) exactly */}
            <div className="w-64 flex-shrink-0 hidden md:block"></div> 

            {/* Content column */}
            <div className="flex flex-col text-white">
                <h3 className="text-2xl font-bold mb-2">Bio:</h3>
                <p className="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nisi error nostrum cum, ipsa numquam dolores mollitia eligendi, 
                    quaerat provident excepturi rerum impedit consequatur.
                </p>
            </div>

            {/* Spacer: This matches the width of the img (w-64) exactly */}
            <div className="w-64 flex-shrink-0 hidden md:block"></div> 

        </div>
    )
}

export default Biography