import Image from "next/image";
import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab:React.FC<GalleryTabProps>  = ({ image }) => {
    return (
        <Tab className='relative bg-white cursor-pointer aspect-square rounded-md flex justify-center items-center' >
            {({ selected }) => (
                <div>
                    <span className="absolute w-full h-full aspect-square inset-0 rounded-md overflow-hidden" >
                        <Image src={`${image.url}`} alt="images" fill />
                    </span>
                    <span
                        className={cn('absolute inset-0 rounded-md ring-2 ring-offset-2', selected ? "ring-black" : "ring-transparent")}
                    />
                </div>
            )}
        </Tab>
    )
}

export default GalleryTab