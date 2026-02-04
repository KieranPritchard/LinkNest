function ContentBackground({children}) {
    return(
        <>
            <div className="xl:h-[95vh] xl:flex xl:justify-center m-4 p-12 rounded-2xl bg-[#1B2B41]">
                {children}
            </div>
        </>
    )
}

export default ContentBackground