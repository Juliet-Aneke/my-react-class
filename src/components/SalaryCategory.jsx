
function SalaryCategory({category, children}) {
    let styles;
    switch(category) {
        case "Income":
            styles = "bg-yellow-500 text-white";
            break;
        case "Food": 
            styles = "bg-purple-200";
            break;
        case "Utilities":
            styles = "bg-yellow-200";
            break;
        case "Transport":
            styles = "bg-blue-500";
    }
    return (
        <span className={`py-0.5 px-2 rounded-xl text-xs ${styles}`}>
            {children}
        </span>
    )
}

export default SalaryCategory;