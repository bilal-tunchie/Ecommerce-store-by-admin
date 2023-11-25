"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button"
import { ShoppingBag} from "lucide-react"
import useCart from "@/hooks/use-cart";
import { ThemeToggle } from "@/components/theme-toggle";


const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart()
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true)
    }, [])



    if (!isMounted) return null ;

    return (
        <div className="flex items-center gap-x-4">
            <ThemeToggle />
            <Button 
                className="flex items-center rounded-full bg-black px-4 py-2"
                onClick={() => router.push('/cart')}
            >
                <ShoppingBag size={20} color="white"/>
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
        </div>
    )
}

export default NavbarActions;