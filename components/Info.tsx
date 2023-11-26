"use client"
import { Product } from "@/types"
import Currency from "./ui/currency"
import Button from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
    data: Product
}

const Info:React.FC<InfoProps> = ({ data }) => {
    const cart = useCart();

    const onAddToCart:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        cart.addItem(data)
    }

    return (
        <div>
            <h1 className="text-bold text-gray-900 text-3xl dark:text-white">{data?.name}</h1>
            <div className="mt-3 fle items-center justify-center">
                <div className="text-gray-900 text-2xl dark:text-white">
                    <Currency value={data?.price} />
                </div>
            </div>
            <hr className="my-4"/>
            <div className="flex items-center gap-x-4 mb-3">
                <h3 className="font-semibold text-black dark:text-white">Size:</h3>
                <p>{data?.size?.name}</p>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black dark:text-white">Color:</h3>
                <div 
                    className="h-5 w-5 rounded-sm border border-gray-600"
                    style={{ backgroundColor: `${data?.color?.value}`}}
                />
            </div>
            <div>
                <p className="text-gray-900 text-lg mt-20 mx-auto w-fit dark:text-white">No description ...</p>
            </div>
            <div className=" mt-48 flex items-center gap-x-3">
                <Button 
                    onClick={onAddToCart}
                    className="flex items-center justify-center gap-x-2 mx-auto w-full py-4 dark:text-black dark:bg-white">
                    Add To Cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    )
}

export default Info