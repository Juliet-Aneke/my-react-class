import { Database, Server, TabletSmartphone } from "lucide-react";
import { Phone } from 'lucide-react';

const courses = [
    {
        id: 1,
        title: "Frontend",
        Icon: TabletSmartphone,
        price: "$100"
    },
    {
        id: 2,
        title: "Backend",
        Icon: Server,
        price: "$150"
    },
    {
        id: 3,
        title: "Database Management",
        Icon: Database,
        price: "$100"
    },
    {
        id: 3,
        title: "Call",
        Icon: Phone,
        price: "$200"
    },
];

export default courses;