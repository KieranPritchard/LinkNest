function LinkButton(props){
    const handleLink = (link) => {
        window.open(link)
    }

    return(
        <button style={{fontFamily: '"Source Code Pro", monospace', fontWeight: 400,}} className="bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] h-14 w-full rounded-xl border-2 text-lg my-2 hover:bg-transparent transition-colors duration-300 ease-in-out" onClick={() => handleLink(props.buttonLink)}>
            {props.buttonName}
        </button>
    )
}

export default LinkButton