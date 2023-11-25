"use client"

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
    item: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const previewModal = usePreviewModal();
    const cart = useCart();
    const router = useRouter();

    const onPreview:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        previewModal.OnOpen(item)
    }

    const onAddToCart:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        cart.addItem(item)
    }
    
    return (
        <div 
            className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
            onClick={() => router.push(`/product/${item?.id}`)}
        >
            <div className="aspect-square relative rounded-xl bg-gray-100">
                <Image 
                    src={`${item?.images[0]?.url}`}
                    alt={`${item?.name}`}
                    fill
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute px-6 bottom-5 w-full">
                    <div className="flex gap-x-6 justify-center items-center">
                        <IconButton 
                            onClick={onPreview}
                            icon={<Expand size={20}/>}
                            className='text-gray-600'
                        />
                        <IconButton 
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20}/>}
                            className='text-gray-600'
                        />
                    </div>
                </div>
            </div>
            <div>
                <p 
                    className="font-semibold text-lg text-black max-w-prose whitespace-nowrap overflow-hidden text-ellipsis"
                    title={`${item?.name}`}
                >
                    {item?.name}
                </p>
                <p className="text-gray-500 text-sm">{item?.category?.name}</p>
            </div>
            <div className="flex items-center justify-between text-black">
                <Currency value={item?.price}/>
            </div>
        </div>
    )
}

export default ProductCard