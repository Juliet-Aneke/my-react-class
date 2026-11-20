import { addTwoNumbers } from "../utils/addTwo";

function AddTwo() {
    

    return (
        <div>
            <h2>Adding Two Numbers</h2>

            <p className=" py-3 px-3 border bg-green-500/50 font-bold">
                The result is {addTwoNumbers(15, 25)}
            </p>
        </div>
    )
}

export default AddTwo;