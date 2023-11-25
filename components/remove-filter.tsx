"use client"
import { useState, useEffect} from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { cn } from '@/lib/utils';
import Button from '@/components/ui/button';

interface RemoveFilterProps {
    id: string;
}

const RemoveFilter:React.FC<RemoveFilterProps> = ({ id }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    },[])

    if (!isMounted) return null

    const hasColorId = searchParams.has("colorId")
    const hasSizeId = searchParams.has("sizeId")

    return (
        <div className='mb-6'>
            <h3 className='text-lg font-semibold'>All</h3>
            <hr className='my-4'/>
            <div className="flex flex-wrap gap-2">
                <div className="flex items-center">
                    <Button 
                        className={cn('rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300', 
                        !hasColorId && !hasSizeId && 'bg-black text-white'
                        )}
                        onClick={() =>router.push(`/category/${id}`)}
                    >
                        Remove Filter
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RemoveFilter;