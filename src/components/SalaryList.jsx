
import SalaryItem from "./SalaryItem";
import salary from "../data/salary";

function SalaryList() {
    return (
        <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {
                salary.map(salary => {
                    return (
                        <SalaryItem 
                            key={salary.id}
                            description={salary.description}
                            amount={salary.amount}
                            type={salary.type}
                            date={salary.date}
                            category={salary.category}
                        />
                    )
                })
            }
        </div>
    )
}

export default SalaryList;