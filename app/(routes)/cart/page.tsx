"use client"

import { useState, useEffect } from "react";

import useCart from "@/hooks/use-cart";
import { useSearchParams } from 'next/navigation'
import Container from "@/components/ui/container";
import CartItem from "@/components/cart-item";
import Summary from "@/components/Summary";

const CartPage = () => {
    const searchParams = useSearchParams();
    const [isSuccessPage, setIsSuccessPage] = useState(false)
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart()

    useEffect(()=> {
        if (searchParams.get('success')) {
            setIsSuccessPage(true);
        }
    }, [searchParams])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null ;

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    {isSuccessPage && <h1 className="text-black font-bold text-3xl mx-auto w-fit mb-20">Thanks you for Choosing Us...</h1>}
                    <h1 className="text-black font-bold text-3xl">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 &&  <p className="text-neutral-500">No Items Added To Cart.</p>}
                            <ul>
                                {cart.items.map(item => (
                                        <CartItem 
                                            key={item?.id.toString()} 
                                            data={item}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CartPage