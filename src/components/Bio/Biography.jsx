function Biography(){
    return(
        <div className="flex flex-col justify-start gap-6 lg:gap-10 lg:flex-row px-4 md:px-0">
            <div className="w-64 flex-shrink-0 hidden lg:block"></div> 

            {/* Content column */}
            <div className="flex flex-col text-white">
                <h3 className="text-2xl font-bold mb-2">Bio:</h3>
                {/* Fixed: Adjusted text size for mobile and added better color contrast for light mode */}
                <p className="text-base md:text-lg leading-relaxed text-[#1B2B41] dark:text-[#f9fafb]">
                    T Level Software Development student at BPC and aspiring ethical hacker. 
                    Driven by a hands-on approach to cybersecurity, 
                    I thrive on tackling technical challenges and building security 
                    solutions through direct project experience.
                </p>
            </div>

            <div className="w-64 flex-shrink-0 hidden lg:block"></div> 

        </div>
    )
}

export default Biography