"use client"

import axios from 'axios'
import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { toast } from 'react-hot-toast'

import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart(state => state.items);
    const removeAll = useCart(state => state.removeAll)
    const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);

    const paymentCompletedShownRef = useRef(false); // prevent toast to render twice 

    useEffect(()=> {
        if (searchParams.get('success') && !paymentCompletedShownRef.current) {
            toast.success('Payment Completed');
            paymentCompletedShownRef.current = true; // prevent toast to render twice 
            removeAll()
        }
        if (searchParams.get('canceled') && !paymentCompletedShownRef.current) {
            toast.error('Something went Wrong');
            paymentCompletedShownRef.current = true; // prevent toast to render twice 
        }
    }, [searchParams, removeAll])

    const onCheckOut = async () => {
        const response = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map(item => item.id)
        });
        const data = await response;
        const checkOutUrl = data.data.url

        toast.loading('Redirecting...');

        window.location = checkOutUrl
    };

    return (
        <div
            className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
        >
            <h2 className="text-lg text-gray-900 font-medium">Order Summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:text-black">
                    <div className="text-sm text-gray-900 font-medium">VAT.</div>
                    <Currency value={0} />
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:text-black">
                    <div className="text-base text-gray-900 font-medium">Order Total</div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button disabled={items.length === 0} className='w-full mt-6' onClick={onCheckOut}>Checkout</Button>
        </div>
    )
}

export default Summary