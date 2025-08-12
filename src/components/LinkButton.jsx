function LinkButton(props){
    const handleLink = (link) => {
        window.open(link)
    }

    return(
        <button style={{fontFamily: '"Source Code Pro", monospace', fontWeight: 400,}} className="bg-[#d7e1ec] text-[#0d1b2a] h-14 w-full rounded-xl border-2 border-[#d7e1ec] text-lg my-2 hover:bg-transparent hover:text-[#d7e1ec] transition-colors duration-300 ease-in-out" onClick={() => handleLink(props.buttonLink)}>
            {props.buttonName}
        </button>
    )
}

export default LinkButton