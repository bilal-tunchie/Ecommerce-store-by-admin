"use client"

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react'
import IconButton from '@/components/ui/icon-button';
import { X } from 'lucide-react';

const Modal:React.FC<ModalProps> = ({ open, onClose, children }) => {
    return (
        <Transition show={open} appear as={Fragment}>
            <Dialog as="div" className="relative z-1 bg-white" onClose={onClose}>
                <div className='fixed inset-0 bg-black bg-opacity-50'/>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='min-h-full p-4 text-center flex items-center justify-center'>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle bg-white">
                                <div className='relative flex w-full items-center overflow-hidden px-4 pb-8 pt-4 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 dark:bg-black'>
                                    <div className="absolute right-4 top-4 dark:text-black">
                                        <IconButton onClick={onClose} icon={<X size={15}/>}/>
                                    </div>
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal;