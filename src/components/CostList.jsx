import courses from "../data/courses";
import CostCard from "./CostCard";


function CostList() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
            {
                courses.map((course) => (
                   <CostCard
                    key={course.id}
                    title={course.title}
                    price={course.price}
                    Icon={course.Icon}
                    />
                ))
            }
        </div>
        
    )
}
export default CostList;