
function SalaryCategory({category, children}) {
    let styles;
    switch(category) {
        case "income":
            styles = "bg-red-400 text-white";
            break;
        case "food": 
            styles = "bg-purple-200";
            break;
        case "utilities":
            styles = "bg-yellow-200";
            break;
        case "transport":
            styles = "bg-blue-200";
    }
    return (
        <span className={`py-0.5 px-2 rounded-xl text-xs ${styles}`}>
            {children}
        </span>
    )
}

export default SalaryCategory;