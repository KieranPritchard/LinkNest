import Picture from '../../assets/kieran-pritchard-profile-photo.webp'

function PersonalBio(){
    return(
        /* Changed grid to flex and added gap-8 to control the distance */
        <div className="flex justify-start items-center gap-10">
            {/* Image section */}
            <div className='flex justify-center'>
                <img className='rounded-full w-64' src={Picture} alt="Image of me" />
            </div>

            <div className="flex flex-col justify-center text-white">
                {/* Section with bio */}
                <h1 className='text-6xl font-bold'>Kieran Pritchard</h1>
                <h2 className='text-4xl'>T-Level Student</h2>
                <p className='text-xl'>Contact: KieranPritchard06@gmail.com</p>
            </div>
        </div>
    )
}

export default PersonalBio