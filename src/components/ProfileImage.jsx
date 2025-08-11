import Picture from '../assets/Image-Of-Self-1.webp'

function ProfileImage(){
    return(
        <div className='flex justify-center pt-4'>
            <img className='h-64 w-64 rounded-full' src={Picture} alt="Image of me" />
        </div>
    )
}

export default ProfileImage