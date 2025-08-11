import RowButton from "./RowButton"

function ButtonRow(){
    return(
        <div className="flex flex-row justify-center my-4 gap-4">
            <RowButton Icon={"phone"} contact={"+44 07763 534145"}/>
            <RowButton Icon={"email"} contact={"KieranPritchard06@gmail.com"}/>
            <RowButton Icon={"message"} contact={"+44 07763 534145"}/>
        </div>
    )
}

export default ButtonRow