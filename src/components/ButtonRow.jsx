import RowButton from "./RowButton"

function ButtonRow(){
    return(
        <div className="flex flex-row justify-center my-4 gap-4">
            <RowButton Icon={"phone"}/>
            <RowButton Icon={"email"}/>
            <RowButton Icon={"message"}/>
        </div>
    )
}

export default ButtonRow