import Picture from '../../assets/kieran-pritchard-profile-photo.webp'

function PersonalBio(){
    return(
        <div className="flex flex-col justify-center items-center gap-6 lg:gap-10 lg:flex-row px-4 md:px-0 mb-10">
            {/* Image section */}
            <div className='flex justify-center flex-shrink-0'>
                <img className='rounded-full w-48 md:w-64' src={Picture} alt="Image of me" />
            </div>

            {/* Fixed: Removed justify-center so it aligns left on desktop but center on mobile */}
            <div className="flex flex-col justify-center text-[#1B2B41] dark:text-[#f9fafb] text-center lg:text-left">
                {/* Section with bio */}
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>Kieran Pritchard</h1>
                <h2 className='text-2xl md:text-3xl lg:text-4xl mt-2'>T-Level Student</h2>
                <p className='text-lg md:text-xl mt-1 opacity-90'>Contact: KieranPritchard06@gmail.com</p>
            </div>
        </div>
    )
}

export default PersonalBio