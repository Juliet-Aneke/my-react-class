import { Megaphone } from "lucide-react";

function ProductItem({productName, price}) {
    return (
        <div className="flex flex-col gap-4 border border-black/10 shadow-1g py-8 px-6 rounded-3xl bg-yellow-100">
            <h3 className="font-bold">{productName}</h3>

            <div className="flex justify-between">
                <span>{price}</span>
                <button><Megaphone /></button>
                
            </div>
        </div>
        
    );
}

export default ProductItem;