"use client"

import { useState } from 'react';
import { Color, Size } from '@/types';
import Filter from "@/components/Filter";
import RemoveFilter from "@/components/remove-filter";
import { useSearchParams, useRouter } from 'next/navigation';
import { Plus, X } from 'lucide-react'
import Button from '@/components/ui/button';
import { Dialog } from '@headlessui/react';

import { cn } from '@/lib/utils';
import IconButton from './ui/icon-button';

interface MobileFiltersProps {
    categoryId: string
    colors: Color[];
    sizes: Size[];
}

const MobileFilters:React.FC<MobileFiltersProps> = ({ categoryId, sizes, colors }) => {

    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <div className='mb-6 lg:hidden'>
            <Button
                className='flex items-center gap-x-2 dark:bg-white dark:text-black'
                onClick={onOpen}
            >
                Filter
                <Plus size={20}/>
            </Button>
            <Dialog 
                open={open}
                onClose={onClose}
                as="div"
                className='relative z-40 lg:hidden'
            >
                <div className='fixed inset-0 bg-black opacity-25'/>
                <div className='fixed inset-0 z-40 flex'>
                    <Dialog.Panel
                        className="relative ml-auto flex h-full w-full max-w-xs flex-col shadow-xl overflow-y-auto pb-6 py-4 bg-white dark:bg-black"
                    >
                        <div className='flex items-center justify-center px-4 dark:text-black'>
                            <IconButton icon={<X size={15} />} onClick={onClose}/>
                        </div>
                        <div className='p-4'>
                            <RemoveFilter 
                                id={categoryId}
                            />
                            <Filter 
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter 
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    )
}

export default MobileFilters;