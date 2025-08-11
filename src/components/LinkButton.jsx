function LinkButton(props){
    const handleLink = (link) => {
        window.open(link)
    }

    return(
        <button className="bg-[#d7e1ec] text-[#0d1b2a] h-14 w-full rounded-xl hover:bg-transparent border-2 border-[#d7e1ec] hover:text-[#d7e1ec] text-lg my-2" onClick={() => handleLink(props.buttonLink)}>
            {props.buttonName}
        </button>
    )
}

export default LinkButton