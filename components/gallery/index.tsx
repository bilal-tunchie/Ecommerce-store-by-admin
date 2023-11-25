"use client"

import Image from "next/image";
import GalleryTab from "@/components/gallery/gallery-tab"
import { Image as ImageType } from "@/types"
import { Tab } from "@headlessui/react"

interface GalleryProps {
    images: ImageType[]
}

const Gallery:React.FC<GalleryProps> = ({images}) => {
    return (
        <Tab.Group as="div" className='flex flex-col-reverse'>
            <div className="mx-auto mt-6 hidden w-full sm:block max-w-2xl lg:max-w-none">
                <Tab.List className='grid grid-cols-4 gap-6'>
                    {images.map( image => (
                        <GalleryTab key={image?.id.toString()} image={image}/>
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className='aspect-square w-full'>
                {images.map( image => (
                    <Tab.Panel key={image?.id.toString()} >
                        <div className="relative w-full  aspect-square sm:rounded-lg overflow-hidden" >
                            <Image src={`${image.url}`} alt="image" fill />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Gallery;