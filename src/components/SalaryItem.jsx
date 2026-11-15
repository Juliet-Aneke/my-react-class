import { salaryDate } from "../utils/salaryDate";
import SalaryCategory from "./SalaryCategory";

function SalaryItem({description, amount, type, date, category}) {
    return (
        <div className={`${type === "credit" ? "bg-green-500/50" : "bg-red-300"} py-10 px-6 border border-black/20 shadow-xl rounded-3xl flex flex-col gap-4`}>
            <h3>{description}</h3>

            <span>
                {amount}
            </span>

            <div className="flex justify-between">
                <span>
                    {salaryDate(date)}
                </span>

                

                <SalaryCategory category={category}>
                    {category}
                </SalaryCategory>
            </div>
        </div>
    )
}

export default SalaryItem;