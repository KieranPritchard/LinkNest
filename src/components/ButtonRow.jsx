import RowButton from "./RowButton"

function ButtonRow(){
    return(
        <div className="flex flex-row justify-center my-4 gap-4">
            <RowButton icon={"phone"} />
            <RowButton icon={"email"} />
            <RowButton icon={"message"} />
        </div>
    )
}

export default ButtonRow