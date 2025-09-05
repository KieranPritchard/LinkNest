import RowButton from "./RowButton"

function ButtonRow(){
    return(
        <div className="flex flex-row justify-center my-4 gap-4">
            <RowButton icon={"phone"} details={"+44 07763 534145"}/>
            <RowButton icon={"email"} details={"KieranPritchard06@gmail.com"}/>
            <RowButton icon={"message"} details={"+44 07763 534145"}/>
        </div>
    )
}

export default ButtonRow